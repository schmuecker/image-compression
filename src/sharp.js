import sharp from "sharp";

sharp("input/desert.jpg")
  .resize(2000, 2000, { fit: "inside" })
  .jpeg({ mozjpeg: true, quality: 60 })
  .toFile("output/desert_sharp.jpg");
