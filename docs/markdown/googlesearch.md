# Docs: deleteGoogleSearchURLParams

This variable contains search parameters found inside of a Google search URL. As it's above comment in the config.js file suggests, all of these can be omitted and will still work fine. In case you we're curious, here is a list of what most of the parameters in the variable does:

| Parameter |Description|Sample value|
|-----------|-----------|------------|
|   aqs     | A parameter for "logging purposes" | aqs=chrome..69i57.421j |
|   ved     | A protobuf encoded URL safe base64 string containing information about where a link was clicked | ved=2ahUKEwjKqYqarZvtAhVMUJQKHWJRBJoQ2-cCegQIABAC |
| biw & bih | Screen dimensions (bih is used in Bosnia and Herzegovenia)* | biw=1920&bih=1080 |
|   dpr     | Screen pixel ratio (`window.devicePixelRatio`) | dpr=2 |
|   oq      | The original query (what was typed in) as opposed to the actual query (autocompleted from search bar) | oq=sohes (assuming `q` is "shoes") |
| (s)client   | `client` is Chrome's name of the platform where the query took place, `sclient` is something else I don't know a whole lot about it. | client=ms-android-samsungfridge-rev1&sclient=mobile-gws-wiz-img |

>\* - not really

The rest of the parameters in the list have an unknown function to search other than it's probably for tracking and/or logging purposes. Search still works fine even if these parameters are removed. However, there are some URL parameters that will render searching difficult or impossible. Here is a short list of these parameters:

| Parameter |Description|Sample value|
|-----------|-----------|------------|
|     q     | The query itself | q=fluffy+kittens |
|    tbm    | Type of query    | tbm=isch |
|   chips   | Search subcategories (used for images and videos) | chips=q%3Afluffy+kittens%2Cg_1%3Aragdoll%3Ar_1jE2TisS8%3D |