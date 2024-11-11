# YouTube Video Summarizer 📹

A Next.js application that automatically generates text summaries from YouTube videos using the OpenAI API.

## 🌟 Features

- YouTube video summary generation
- Clean and intuitive user interface
- Multilingual summary support
- Compatible with latest YouTube videos

## 🚀 Installation

1. Clone the repository:

    ```bash
    git clone [YOUR_REPO_URL]
    cd youtube-summarizer
    ```

2. Install dependencies:

    ```bash
    pnpm install
    ```

3. Configure environment variables:
   - Create a `.env` file in the root directory
   - Add your OpenAI API key:

    ```env
    OPENAI_API_KEY=your_api_key_here
    ```

4. Start the development server:

    ```bash
    pnpm dev
    ```

The application will be available at: `http://localhost:3000`

## 🔑 OpenAI API Key Configuration

To obtain an OpenAI API key:
1. Go to [OpenAI](https://platform.openai.com/signup)
2. Create an account or sign in
3. Navigate to the API Keys section
4. Generate a new API key
5. Copy the key to your `.env` file

## 💻 Usage

1. Access the application through your browser
2. Paste the YouTube video URL you want to summarize
3. Click on "Generate Summary"
4. Wait while the summary is being generated
5. The summary will automatically display once completed

## 🛠 Tech Stack

- [Next.js](https://nextjs.org/)
- [OpenAI API](https://openai.com/api/)
- [YouTube Data API](https://developers.google.com/youtube/v3)
- [TailwindCSS](https://tailwindcss.com/)

## 📝 License

MIT

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ⚠️ Limitations

- Requires a valid OpenAI API key
- Longer videos may take more time to process
- Summary quality depends on available transcription quality

## 📞 Support

If you encounter any issues or have questions, feel free to:
- Open an issue on GitHub
- Contact me at [your_email@example.com]