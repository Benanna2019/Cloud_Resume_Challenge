@app
arc-beginnings

@http
get  / # server root

@static # static asset server

@tables
visitcount
  appName *String

@plugins
arc-plugin-tailwindcss

@aws
# profile default
region us-east-2
architecture arm64
