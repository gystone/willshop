<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\User::create([
            'name' => 'admin',
            'password' => '123456',
            'mobile' => '13211112222',
            'email' => 'admin@qq.com',
            'avatar' => '',
            'api_token' => '273AAFaZ1qXVDrZPpKYF5zjN3uyMGChpVmw6tC8iPQjMQdO5tJkSC6CXuaH9',
        ]);
    }
}
