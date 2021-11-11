
type NuxtEnvConfigEntry = {
  nitroPreset: string | null,
}

interface NuxtEnvConfig {
  [key: string]: NuxtEnvConfigEntry;
}

export default NuxtEnvConfig
