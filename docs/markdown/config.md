# Docs: Configuration

Say you need to restore or create a backup to the extension and don't want to do it from scratch and configure everything in the config.js file and type every entry by hand. Here is the right way to do it.

## Creation [#](#creation "Permalink to Creation")

To create a backup:

1. Open the console (see [cli.md](cli.md#open) for help)
2. Type `dumpconf(name: string,flags: string[],version: string) -> object` then right click over the resulting object and click "Copy object"

The resulting object is a copy of your configuation in JSON format. Paste this code to a file and save it with a .json extension.

## Loading [#](#loading "Permalink to Loading")

*This feature is under development*

To load back a saved configuation:

1. Open the console like before
2. Type `loadconf(object)` where `object` is your configuration data.

*you many need to restart the extension for the changes to take effect.*

## Data [#](#data "Permalink to Data")

The configuration object contains the following:

| Name | Description | Type |
| ---- | ----------- | ---- |
| `config_version` | Version number of the configuration, current supported is 1. | Number |
| `name` | Name of the configuration. | String |
| `flags` | Array of flags set by the flags parameter. | String[] |
| `data` | Object of data exported. | Object |

### Data in `data` object

| Key | Description | Type |
| --- | ----------- | ---- |
| `clienv` | Command enviroment variables, read only. | Object |
| `log` | Log object [<sup>1</sup>](config.md#data_log-obj) | Object |
| `switches` | Enable or disable features [<sup>2</sup>](config.md#data_switches-obj)| Object |
| `deleteGoogleSearchURLParams` | Delete certain Google search parameters (biw, bih, ved...) | String[] |
| `adware` and `reglist` | Array of domains and paths in [extension mainfest pattern format](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) | String[] |
| `enableAdvancedPrivacy` | Set user-agent and sec-ch-ua headers to 0 | Boolean |
| `ipWhitelist` | Whitelist of IP addresses for `switches.block.pings` to accept | String[] |
| `_regex` | Object containing regular expressions from various features | Object |
| `_regexList` | Object containing an array of regular expressions | Object |

### Data in `log` Object [1](#data_log-obj)

| Key | Description | Type |
| --- | ----------- | ---- |
| `EnableConsole` | Enable logging of caught requests to console. | Boolean |
| `EnableArray` | Enable logging of caught requests to the `dd` object, this is more descriptive than the console. | Boolean |
| `opts` | Options of what to log out to the `dd` object. (See [dd.md](dd.md) for more info) | Object |
| `logOut` | Options to log out to the console by category, this does not affect the dd object.  | Object |

### Data in `switches` Object [2](#data_switches-obj)

| Key | Description | Type |
| --- | ----------- | ---- |
| `block` | Object listing down what to block: { | --- |
| `ads` | Block requests in the ad category. | Boolean |
| `pings` | Block ping requests, including requests sent by the Beacon API in some browsers. | Boolean |
| `playlogs` | Block `google.com/log?format=json&hasfast=true` requests. (see [here](https://live.paloaltonetworks.com/t5/general-topics/anyone-else-have-a-ton-of-these/td-p/182116) for info) | Boolean |
| `ip` | Block all requests that use an IP as a domain name. | Boolean |
| `byregex` | Block by using RegExp feature. } | Boolean |
| `modif` | Modify requests: { | --- |
| `ythttp` | Modify HTTP headers from YouTube videos (x-youtube-ad-signals) | Boolean |
| `cache` | Modify cache-control headers in images to "no-cache, no-store, max-age=0" (not garuanteed) | Boolean |
| `resua` | Set sec-ch-ua and User-Agent headers to 0 } | Boolean |