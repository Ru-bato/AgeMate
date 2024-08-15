# AgeMate

Large Model-based Mobile Assistant for the Elderly

## Introduction

The AgeMate project provides smartphone assistant services specifically for the elderly population through advanced big model technology, gradually teaching the elderly to use smartphones and solving the various difficulties they encounter in the process of using them. The project combines multimodal AI technology to realize natural human-computer interaction with voice, vision, and text data, and combines the image and functions of OPPO's Boo Assistant to provide real-time voice guidance and operation prompts to help elderly users use modern technology more easily.

## Folder Structure

- **dataset**: currently holds the small evaluation dataset that we use to test the performance of LLMs. In the future,
  it will hold a larger evaluation dataset and links to a modern UI screenshot and icon dataset.
- **agemate-demo**: source code for our project page, containing a static demo of AgeMate's algorithm.
- **agemate-system**: development folder for AgeMate system. It contains a web-based tech demo that could be run on your
  computer. The system uses ChatGLM from Zhipu AI, so you should prepare an API key.

## Starting(Temporary)

运行方式是

```sh
cd agemate-demo
yarn
yarn start
```

如果`yarn`相关命令报错且难以解决

- 删去`node_modules`文件夹和`package-lock.json`文件
- 使用以下命令将运行方式切换为`npm`

```sh
npm install --force
```

- 运行

```sh
npm run start
```