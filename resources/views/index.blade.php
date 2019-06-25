<html>
	<header></header>
	<body>
		<span>Então chamamos nossa prórpia api e retornamos o objeto</span>

		@foreach($users as $user)
		<ul>
			<li>{{$user->id}}</li>
			<li>{{$user->email}}</li>
			<li>{{$user->name}}</li>
		</ul>
		@endforeach

	</body>
</html>