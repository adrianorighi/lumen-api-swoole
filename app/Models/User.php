<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;

class User extends BaseModel implements AuthenticatableContract, JWTSubject
{
    use SoftDeletes, Authenticatable;

    protected $hidden = ['password', 'deleted_at'];

    // jwt method to be implemented
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    // jwt methods that need to be implemented, some custom parameters
    public function getJWTCustomClaims()
    {
        return [];
    }
}
