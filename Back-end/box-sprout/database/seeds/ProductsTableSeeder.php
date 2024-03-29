<?php

use App\Product;
use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    private $locales = ['en', 'nl', 'fr'];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $product = Product::firstOrNew([
            'price' => 995,
            'image' => 'basil.jpg',
        ]);

        $product->fill($this->productDetails('basil'))->save();

        // ######

        $product = Product::firstOrNew([
            'price' => 995,
            'image' => 'chives.jpg',
        ]);

        $product->fill($this->productDetails('chives'))->save();

        // ######

        // $product = Product::firstOrNew([
        //     'price' => 995,
        //     'image' => 'basil.1.jpg',
        // ]);

        // $product->fill($this->productDetails('borage'))->save();

        // ######

        $product = Product::firstOrNew([
            'price' => 995,
            'image' => 'rucola.jpg',
        ]);

        $product->fill($this->productDetails('rucola'))->save();

        // ######

        $product = Product::firstOrNew([
            'price' => 995,
            'image' => 'cherry-tomato.jpg',
        ]);

        $product->fill($this->productDetails('cherry-tomato'))->save();

        // ######

        // $product = Product::firstOrNew([
        //     'price' => 995,
        //     'image' => 'basil.2.jpg',
        // ]);

        // $product->fill($this->productDetails('dill'))->save();

        // ######

        // $product = Product::firstOrNew([
        //     'price' => 995,
        //     'image' => 'coriander.jpg',
        // ]);

        // $product->fill($this->productDetails('coriander'))->save();

        // ######

        $product = Product::firstOrNew([
            'price' => 995,
            'image' => 'radish.jpg',
        ]);

        $product->fill($this->productDetails('radish'))->save();

        // ######

        $product = Product::firstOrNew([
            'price' => 995,
            'image' => 'cress.jpg',
        ]);

        $product->fill($this->productDetails('cress'))->save();
    }

    private function productDetails($product)
    {
        $fill = [];
        foreach ($this->locales as $locale) {
            $fill[$locale] =  [
                'title' => $this->productTitle($product, $locale),
                'description' => $this->productDescription($product, $locale)
            ];
        }

        return $fill;
    }

    private function productTitle($product, $locale)
    {
        return __("products." . $product . ".title", [], $locale);
    }

    private function productDescription($product, $locale)
    {
        return __("products." . $product . ".description", [], $locale);
    }
}
