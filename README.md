# EmotiScan

## Table of Contents

- [Introduction](#introduction)
- [Live Link](#live-link)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Introduction

EmotiScan is a web app that uses machine learning to analyze emotions in text. By leveraging the power of Hugging Face's models. This application provides an intuitive way to visualize and understand the emotions conveyed in any given text input.

## Live Link

You can access the live project [here](https://sentiment-analysis-khaki.vercel.app).

## Model Used

I have used this model to classify the emotions: [SamLowe/roberta-base-go_emotions](https://huggingface.co/SamLowe/roberta-base-go_emotions)

## Features

- Real-time emotion detection and visualization
- Dynamic background color changes based on detected emotions
- Easy-to-use text input with automatic height adjustment
- Real-time loading indicators

## Technologies Used

- Next.js
- Tailwind CSS
- ShadCN UI components
- Hugging Face API
- TypeScript
- Bun for faster build and start times


## Installation

To get started with EmotiScan, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/sentiment-analysis.git
    cd sentiment-analysis
    ```

2. **Install dependencies using Bun/NPM/Yarn/PNPM:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3. **Run the application:**

    ```bash
    npm dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

    The application will be available at `http://localhost:3000`.

## Usage

1. Open the application in your browser.
2. Enter your text in the provided textarea.
3. The detected emotions will be displayed with corresponding colors and emojis.
4. The background color of the page will change based on the predominant emotion.
   
>Note: You may see one or two more emotions which are reflected by the entered text but the first emotion is the predominant one.

| ![image](https://github.com/user-attachments/assets/f8a885f9-6cdb-4a76-b6ef-da4bc0e1e8f8) | ![image](https://github.com/user-attachments/assets/e067b447-ea64-47d6-bf0a-7b10c4d37c8f) |
|:--:|:--:|


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


Happy analyzing! 😊
