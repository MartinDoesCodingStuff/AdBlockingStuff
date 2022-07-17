# Docs: dd Object

This object is useful to gauge how many ad requests a website makes in a amount of time or to evaluate trustworthiness of a sketchy site.

## Data [#](#data "Permalink to Data")

Data is grouped into 4 categories: reg, adware, ping and redirect. Redirect is redirects from features throughout the extension (bgscr/special-case.js).

You can clear this data by calling `clrdd()` from the console.
| Name | Description |
| --- | ------------ |
| `type` | Request group. |
| `url` | URL of request blocked. |
| `origin` | Document URL that started the request.  (example:. mainpage.example.com calls subscript.exmaple.com which calls pagead.example.com, mainpage.example.com is recorded.) |
| `initiator` | Domain name that called the request. (this time subscript.example.com is recorded.) |
| `tabId` | Tab ID of the request. |
| `caller` | Identifier of the feature that blocked it. See [dd Caller reference](dd.md#dd-caller-reference) for info. |
| `timestamp` | Timestamp in Unix Epoch time of the request. |
| `timestamp_req` | Timestamp of the request from the details.timeStamp object.

## dd Caller reference [#](#dd-caller-reference)

| Identifier | Feature name | Line no. (script) |
| ---------- | ------------ | ----------------- |
| `ad-radar/pings` | Ping Blocker | 11 (bgscr/ad-radar-advanced.js) |
| `ad-radar/ads` | Ad Blocker | 9 (bgscr/ad-radar-advanced.js) |
| `ad-radar/adware` | Adware Blocker | 10 (bgscr/ad-radar-advanced.js) |
| `special-case/case_ip` | IP Address Blocker | 153 (bgscr/special-case.js) |
| `special-case/case_byregex:(adware\|reg)` | Block by Regex | 217 (bgscr/special-case.js) |
