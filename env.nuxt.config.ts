import NuxtEnvConfig from "./types/config/env.config";


const Configurations: NuxtEnvConfig = {
  development: {
    nitroPreset: null
  },
  cloudflare: {
    nitroPreset: "cloudflare"
  },
  netlify: {
    nitroPreset: null
  },
};

export default Configurations
