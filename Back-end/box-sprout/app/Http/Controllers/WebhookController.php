<?php

namespace App\Http\Controllers;

use App\User;
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
            $user->charge($product->price, ['source' => $payload['data']['object']['id']]);
        } catch (Exception $e) {
// ignored
        }
    }
}
