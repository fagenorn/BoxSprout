<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use jeremykenedy\LaravelRoles\Models\Role;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Let's clear the users table first
        User::truncate();

        $faker = \Faker\Factory::create();

        // Let's make sure everyone has the same password and
        // let's hash it before the loop, or else our seeder
        // will be too slow.
        $password = Hash::make('admin');

        $admin = User::create([
            'name' => 'Administrator',
            'email' => 'admin@admin.com',
            'password' => $password,
        ]);

        // Set admin role
        $role = Role::where('name', '=', 'Admin')->first();
        $admin->attachRole($role);

        // And now let's generate a few dozen users for our app:
        for ($i = 0; $i < 10; $i++) {
            $user = User::create([
                'name' => $faker->name,
                'email' => $faker->email,
                'password' => $password,
            ]);

            // Set user role
            $role = Role::where('name', '=', 'User')->first();
            $user->attachRole($role);
        }
    }
}
