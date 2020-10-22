// This is code will compress files of images
// Doc: https://github.com/semiromid/compress-images
// This optimize the image size of archives, run this every you need
// To execute "yarn optimize"

const compress_images = require("compress-images")

let inputPath;
let outputPath;

inputPath = "../../images/*/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}";
outputPath = "../../optimizedImages";

compress_images(
    inputPath, 
    outputPath, 
    { compress_force: false, statistic: true, autoupdate: true }, false,
    { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
    { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
    { svg: { engine: "svgo", command: "--multipass" } },
    { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },

  function (error: Error, completed: any, statistic: any) {
    if(statistic) {
        console.log("-------------");
        console.log(statistic);
        console.log("-------------");
    }   
    if(error) 
        console.log(error)
  } 
);
