<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <link rel="stylesheet" href="{{ asset('css/bootstrap.css') }}" />
        <link rel="stylesheet" href="{{ asset('css/common.css') }}" />
        <link rel="stylesheet" href="{{ asset('css/main.css') }}" />
        <link rel="stylesheet" href="{{ asset('css/responsive.css') }}" />

    </head>
    <body>
        <div id='root'></div>

        <script>
			(function() {
				window.Laravel = {
					csrfToken: '{{ csrf_token() }}'
				};
				@if(Auth::check())
				window.authUser = {!! Auth::user() !!}
				@else
				window.authUser = false
				@endif
			})();
		</script>
        <script src="{{asset('js/app.js')}}"></script>
    </body>
</html>
