<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Chess app</title>
</head>
<body>
<header role="banner"></header>
<main id="main">

</main>
<footer>
    <script type="marionette-template" id="home-view">
        You are logged
    </script>
    <script type="marionette-template" id="login-view">
        <form id="login-form" name="login-form">
            <div>
                <label for="login"></label>
                <input type="text" id="login">
            </div>
            <div>
                <label for="password"></label>
                <input type="password" id="password">
            </div>
            <div>
                <button type="submit">
                    Log in!
                </button>
            </div>
        </form>
    </script>
    <script data-main="src/main.js" src="libs/requirejs/require.js"></script>
</footer>
</body>
</html>
