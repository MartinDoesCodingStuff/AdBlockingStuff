*This feature is under development*

# Docs: Configuration Flags

Here is the list of valid configuration flags that a parser can read. Any other text whether in a different case than documented or a non-existent feature is ignored by the parser.

| Name | Description |
| ---- | ----------- |
| `full-config` | Replace and overwrite all settings. Every [entry](config.md#data "List of entries") must be in the config or else it throws an error.
| `do-not-use` | Do not use this config. Used by the author to signal that it is for presentation only, if used it prompts you if you want to load this, type `confyes()` to confirm. |
| `half-config` | Only replace entries listed in the data section, does not require the data section to have every entry. |
