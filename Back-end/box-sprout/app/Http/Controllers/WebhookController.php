<?php

namespace App\Http\Controllers;

use App\User;
use App\Order;
use App\Product;
use Laravel\Cashier\Http\Controllers\WebhookController as CashierController;

class WebhookController extends CashierController
{
    /**
     * Handle source payment succeeded.
     *
     * @param  array  $payload
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function handleSourceChargeable($payload)
    {
        try {
            $user = User::find($payload['data']['object']['metadata']['user']);
            $product = Product::find($payload['data']['object']['metadata']['product']);
            $response = $user->charge($product->price, [
                'source' => $payload['data']['object']['id'],
                'description' => 'BoxSprout',
                'metadata' => $payload['data']['object']['metadata'],
                'receipt_email' => $payload['data']['object']['owner']['email'],
            ]);

            $order = new Order([
                'payment_id' => $response['id'],
                'source_id' => $response['source']['id'],
            ]);

            $order->user()->associate($user);
            $order->product()->associate($product);
            $order->save();
        } catch (Exception $e) {
            // ignored
        }
    }
}
