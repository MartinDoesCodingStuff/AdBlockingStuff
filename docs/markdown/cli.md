# Docs: Command Interface

There is no GUI to speak of in this extension, so if you need to check if a specific feature is enabled, create a backup or look at the logs, follow this guide.

## Opening the Console [#](#open "Permalink to Opening the Console")

1. Open the chrome extension page (chrome://extensions) and enable "Developer mode"
2. click on "Details" then look for "Inspect views". Click where it says "background page"
3. You are now in a "DevTools" window. To interact with the extension, navigate to the "Console" tab.

## Commands [#](#commands "Permalink to Commands")
### Available

- help(): string - Open the help prompt
- dump(): object - Dump the "dd" object with total event lengths

#### Confiuration

- dumpconf(name,flags,version): object - Dump configuration to save for later.

>Arguments:
>- name* {string}: name of the configuration, when set to null, it defaults to `backup-${new Date().getTime()}`.
>- flags {string[]}: array of strings containing hints for the parser about what kind of configuation it is. (see [config-flags.md](config-flags.md) for a list).
>- version* {string}: version number of the file.
>
> \* only have semantic meaning and is only used in confinfo()
>
> Returns: An object, a complete configuration
>
> **NOTE**: any object names prepended with an underscore (_) is encoded in a manner to prevent errors when parsing to JSON format.

### To be added

- confcompare(config_json\[,ignore_list\]): boolean - Compare differences between a configuation file and the settings already set.

>Arguments:
>- config_json {object}: Configuation file to put against the configured settings.
>
>- ignore_list {boolean}: Ignore any lists (reglist, adware, regexList) that the config has. Default is true
>
>Returns: A boolean, true if the config is the same as loaded, false if not.

- loadconf(configobj): void - load the config object into the extension.

>Arguments:
>- configobj {object}: object containing the configuration.
>
>Returns: Void, but logs out it's progress.

**Warning:** Don't load random configurations from the internet as it can break features, blocks critical features of sites and can kick you out of a service. Don't load random configurations you don't understand!

- confinfo(): void - Log out the metadata of the loaded configuration, such as the version and name, returns "No configuration loaded, using default" if no configutation is used.