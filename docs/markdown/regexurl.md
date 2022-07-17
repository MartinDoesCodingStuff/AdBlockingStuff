## Docs: RegexURL
This isn't exactly part of the extension, but I'll leave it here anyway.


### What [#](#what)

It is regular expressions with special meanings given to some extra characters: pound (#) and percent (%). Where pound represents a top-level domain (TLD such as .com, .co.uk) and percent represents a subdomain.

These go into the parser and turned into regular expressions. "%" gets turned into regex expression "(\[0-9,a-z,-\]+\\.)*" and "#" gets turned into "(\\.\\w+){1,2}", appends "^(https?):\\/\\/" at the start and uses the global and case-insensitive flags for good measure.


### How [#](#how)

Say for example we want to block https://209740928734.somesub.pagead.example.com/pagead and so on and we only want to block pagead.example.com and it's TLD derivaties, like pagead.example.co.uk, pagead.example.au.

We can write `%pagead\\.example#`

instead of `*://*.pagead.example.com/*`

or `^(https?):\/\/([0-9,a-z,-]+\.)*pagead\.example(\.\w+){1,2}`

Here is another one. Say that said ad comapany uses 2-3 numbers after pagead (pagead21.example.com). If we we're to use [extension manifest patterns](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns), this file will have to be very big, this is inneficent. Since we can implement regex in our list, we can say `%pagead[0-9]+\\.example#` and reduce our file size by an order of magnitude.

### Where [#](#where)

This is applicable if: 
- there are multiple but similar variants that have a regex-able domain.

### What it can do [#](#can-do)

1. Reduce the file size of a blocklist
2. Save time spent on making a script to automate subdomain generation

### What it can't do [#](#cant-do)

Block every similar domain - There are some [advertising companies](https://www.clickadu.com/) that are hellbent on pushing their *scum* ads they decide to smash their keyboard and use that as a domain name. Others, just cut out the middleman and decide to use garbled trash as a domain name. Don't believe me? Open [this block list for AdBlock](https://raw.githubusercontent.com/notracking/hosts-blocklists/master/adblock/adblock.txt) and find for a .bazar TLD. While there are thousands of them, they can't be parsed.
