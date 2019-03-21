<?php

use App\Product;
use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Let's truncate our existing records to start from scratch.
        Product::truncate();

        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 8; $i++) {
            $product = Product::create([
                'price' => $faker->randomNumber(4),
                'image' => 'default.jpg',
            ]);

            $product->fill([
                'en'  => ['title' => 'Basil', 'description' => 'A basil plant is great for some pasta.'],
                'nl'  => ['title' => 'Basilicum', 'description' => 'Basilucum is perfect voor pasta te maken.'],
                'fr'  => ['title' => 'Pasta!!', 'description' => 'Tres Bon. Oui Oeui'],
            ])->save();
        }
    }
}
