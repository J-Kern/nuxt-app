import type { IncomingMessage, ServerResponse } from "http";

export default async (req: IncomingMessage, res: ServerResponse) => {
  console.log(res);

  // TODO generate Matrix from Request
  let generatedMatrix = `0.93 0 0 0 0 0 0.38 0 0 0 0 0 0.33 0 0 0 0 0 1 0`;

  res.write(
    `\<svg\>\<defs\>\<filter id="custom-color"\>\<feColorMatrix in="SourceGraphic" color-interpolation-filters="sRGB" type="matrix" values="${generatedMatrix}"/\>\</filter\>\</defs\>\<image href="assets/j-sh_logo_test.svg" filter="url(#custom-color)"\>\</image\>\<image href="assets/j-sh_logo_noTLD.svg" filter="url(#custom-color)"\>\</image\>\</svg\>`
  );
  res.statusCode = 200;
  res.end("Works!");
};
