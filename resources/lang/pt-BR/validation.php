<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | such as the size rules. Feel free to tweak each of these messages.
    |
    */

    'accepted' => ':attribute deve ser aceito',
    'active_url' => ':attribute não é uma URL válida',
    'after' => ':attribute deve ser maior que :date',
    'alpha' => ':attribute deve conter apenas letras',
    'alpha_dash' => ':attribute deve conter apenas letras, números e sublinhado',
    'alpha_num' => ':attribute deve conter apenas letras e números',
    'array' => ':attribute deve ser um array',
    'before' => ':attribute deve ser menor que :date',
    'between' => [
        'numeric' => ':attribute deve estar entre :min e :max',
        'file' => ':attribute deve estar entre :min - :max kb',
        'string' => ':attribute deve estar entre :min - :max caracteres',
        'array' => ':attribute deve estar entre :min - :max itens',
    ],
    'boolean' => ':attribute deve ser um valor booleano',
    'confirmed' => ':attribute devem ser iguais',
    'date' => ':attribute não é uma data válida',
    'date_format' => ':attribute deve ser no formato :format。',
    'different' => ':attribute e :other devem ser diferentes',
    'digits' => ':attribute deve ser :digits dígitos',
    'digits_between' => ':attribute deve estar entre :min e :max dígitos',
    'distinct' => ':attribute já existe',
    'email' => ':attribute não é um e-mail válido',
    'exists' => ':attribute não existe',
    'filled' => ':attribute não pode estar vazio',
    'image' => ':attribute deve ser uma imagem',
    'in' => 'atributo selecionado :attribute inválido',
    'in_array' => ':attribute não está em :other',
    'integer' => ':attribute deve ser um valor inteiro',
    'ip' => ':attribute deve ser um endereço IP',
    'json' => ':attribute deve ser um JSON no formato correto',
    'max' => [
        'numeric' => ':attribute não pode ser maior que :max',
        'file' => ':attribute não pode ser maior que :max kb。',
        'string' => ':attribute não pode ser maior que :max caracteres',
        'array' => ':attribute não pode conter mais que :max itens',
    ],
    'mimes' => ':attribute deve ser um arquivo do tipo :values ',
    'min' => [
        'numeric' => ':attribute deve ser maior ou igual a :min',
        'file' => ':attribute não pode ser menor que :min kb。',
        'string' => ':attribute deve ter pelo menos :min carateres',
        'array' => ':attribute deve ter pelo menos :min itens',
    ],
    'not_in' => 'atributo selecionado :attribute inválido',
    'numeric' => ':attribute deve ser um número',
    'present' => ':attribute deve existir',
    'regex' => ':attribute está em formato incorreto',
    'required' => ':attribute não pode estar vazio',
    'required_if' => 'quando :other for :value o :attribute não pode estar vazio',
    'required_unless' => 'quando :other for :value o :attribute não pode estar vazio',
    'required_with' => 'quando :values existir, o :attribute não pode ser vazio',
    'required_with_all' => 'quando :values existir o :attribute não pode estar vazio',
    'required_without' => 'quando :values não existir o :attribute não pode estar vazio',
    'required_without_all' => 'quando :values não existir o :attribute não pode estar vazio',
    'same' => ':attribute e :other devem ser iguais',
    'size' => [
        'numeric' => ':attribute deve ter o tamanho :size',
        'file' => ':attribute deve ser do tamanho :size kb',
        'string' => ':attribute deve ter :size caracteres',
        'array' => ':attribute deve ter :size itens',
    ],
    'string' => ':attribute deve ser uma string',
    'timezone' => ':attribute deve ser um valor de fuso horário válido',
    'unique' => ':attribute já existe',
    'url' => ':attribute está em formato incorreto',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention 'attribute.rule' to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap attribute place-holders
    | with something more reader friendly such as E-Mail Address instead
    | of 'email'. This simply helps us make messages a little cleaner.
    |
    */

    'attributes' => [
        'name' => 'nome',
        'username' => 'usuário',
        'email' => 'e-mail',
        'first_name' => 'nome',
        'last_name' => 'sobrenome',
        'password' => 'senha',
        'password_confirmation' => 'confirmação de senha',
        'city' => 'cidade',
        'country' => 'país',
        'address' => 'endereço',
        'phone' => 'telefone',
        'mobile' => 'celular',
        'age' => 'idade',
        'sex' => 'sexo',
        'gender' => 'sexo',
        'day' => 'dia',
        'month' => 'mês',
        'year' => 'ano',
        'hour' => 'hora',
        'minute' => 'minuto',
        'second' => 'segundo',
        'title' => 'título',
        'content' => 'conteúdo',
        'description' => 'descrição',
        'excerpt' => 'resumo',
        'date' => 'data',
        'time' => 'hora',
        'available' => 'disponível',
        'size' => 'tamanho',
    ],

];
