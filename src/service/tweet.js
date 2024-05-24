export default class TweetService {
  tweets = [
    {
      id: 1,
      text: '안녕하세요, 원승연 엔지니어 입니다. v0.1.0',
      createdAt: '2024-05-09T04:20:57.000Z',
      name: 'Mike',
      username: 'mike',
      url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
    },
  ];

  async getTweets(username) {
    return username
      ? this.tweets.filter((tweet) => tweet.username === username)
      : this.tweets;
  }

  async postTweet(text) {
    const tweet = {
      id: Date.now(),
      createdAt: new Date(),
      name: 'Ellie',
      username: 'ellie',
      text,
    };
    this.tweets.push(tweet);
    return tweet;
  }

  async deleteTweet(tweetId) {
    this.tweets = this.tweets.filter((tweet) => tweet.id !== tweetId);
  }

  async updateTweet(tweetId, text) {
    const tweet = this.tweets.find((tweet) => tweet.id === tweetId);
    if (!tweet) {
      throw new Error('tweet not found!');
    }
    tweet.text = text;
    return tweet;
  }
}
