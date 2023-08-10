---
title: 'Create Your Own Comic Book with AI'
description: >
    In this jam, we'll be using ChatGPT to generate the text of a children's comic, and use Stable Diffusion to create pictures for the comic. Both ChatGPT and Stable Diffusion are completely free. Lastly, we'll walk through deploying your comic as a website (yes, with a live URL :)) so you can share it with your friends 🌎
contributor: 'ganning127'
contributorSlackID: 'U03336QJ21H'
thumbnail: 'https://cloud-mbryeyf6a-hack-club-bot.vercel.app/0thumbnail__2_.png'
timeEstimate: '60 Min'
difficulty: 'Easy'
keywords: 'AI, ChatGPT, Stable Diffusion, HTML, CSS'
language: 'ChatGPT,HTMl,CSS,StableDiffusion'
presentation: 'https://www.figma.com/file/vPvkTekK6hzED7fowx0aBf/ComicBookAi?type=design&node-id=11%3A182&mode=design&t=Qgq1JvXvHyxwNwAo-1'
presentationPlay: 'https://www.figma.com/proto/vPvkTekK6hzED7fowx0aBf/ComicBookAi?type=design&node-id=1-2&t=Qgq1JvXvHyxwNwAo-0&scaling=contain&page-id=0%3A1'
presentationPDF: 'https://cloud-c4phbrzty-hack-club-bot.vercel.app/0comicbookai.pdf'
notes: 'https://hackmd.io/l3VKBJluTM2tdP40TDFCIw'
poster: 'https://cloud-h5osxqcta-hack-club-bot.vercel.app/0build_your_own_comic_book_with_ai.pdf'
video: ''
slug: 'web-ai-comic'
---

> 50-60 minutes, easy difficulty.

Hey hacker, welcome to the land of writing and drawing, or rather, using **AI to write and draw for you**! 👋 In this jam, we'll be using **ChatGPT** to generate the text of a children's comic, and use **Stable Diffusion** to create pictures for the comic. Both ChatGPT and Stable Diffusion  are completely free. Lastly, we'll walk through deploying your comic as a website (yes, with a live URL :)) so you can share it with your friends 🌎

This jam will take you from 0 to a ChatGPT and AI model "Hero":
![](https://cloud-a10rlmpqz-hack-club-bot.vercel.app/0image.png)

As an example, here is an example of what your finished storybook may look like ([alex-gets-his-private-pilot-license.ganningxu.repl.co](https://alex-gets-his-private-pilot-license.ganningxu.repl.co))!

![](https://cloud-d9ibqv1p3-hack-club-bot.vercel.app/0screen_recording_2023-08-01_at_12.26.59_pm__2_.gif)

If you're interested, here's another comic that I made with ChatGPT and DALL-E ([robotics-mayhem.ganningxu.repl.co](https://robotics-mayhem.ganningxu.repl.co/))
![](https://cloud-dau1tq7mx-hack-club-bot.vercel.app/0screen_recording_2023-08-08_at_7.06.00_pm.gif)

Keep in mind that your result will be completely different. In fact, if it is the same, you're probably doing something wrong :) With that said, here are some resources that you may find helpful!

**Link to demo**: https://alex-gets-his-private-pilot-license.ganningxu.repl.co

**Comic Site HTML Template (you'll need this to o build your site)**: https://replit.com/@GanningXu/ComicAiSiteTemplate?v=1

**ChatGPT** https://chat.openai.com

**Stable Diffusion**: https://stablediffusionweb.com/#demo

**Outline**
- **Basics of Prompt Engineering**
    - Proven prompt engineering techinques (and challenges!)
    - Small *friendly (or not)* competition to generate the funniest dad jokes :O 
- **Brainstorm** to come up with the plot of your comic
- Using **ChatGPT**, create the text content for your 8-section comic
- For each of the 8 sections, use **Stable Diffusion** to generate a corresponding picture
- Taking Stable Diffussion's pictures and ChatGPT's outline, and create a **comic book website**!

## Prompt Engineering
By now, I'm sure you've heard of what "AI" and ChatGPT are. While most people don't think twice about what question they feed into Large Language Models like ChatGPT, there's actually a whole field of study dedicated to making the perfect input prompt---**[prompt engineering](https://en.wikipedia.org/wiki/Prompt_engineering)**---which focuses on fine-tuning user-input to better shape the response of AI models. 

> 💡 In fact, [OpenAI also made a course on prompt engineering](https://medium.com/geekculture/prompt-engineering-course-openai-inferring-transforming-expanding-chatgpt-chatgpt4-e5f63132f422).

Before diving into specific techniques, we'll cover some "quick facts" about prompting:
- Quality of results often depends on **how much information** the prompt provides, and **how well-crafted** it is
- A typical prompt will contain the following elements:
    - **Instruction:** what you want the model to do
    - **Context:** what background knowledge you want the model to have
    - **Input Data:** question that we are interested in the response for
    - **Output Indicator:** the type/format of the output
- In the "instruction", use specific verbs like "write", "classify", "translate", "summarize", etc
- Be very clear and specific on the task you want the model to perform
    - The more detailed your prompt, the better the answer will be
- Instead of saying what "not to do", tell the model what "to do"

For more information on prompting basics, check out [promptingguide.ai](https://www.promptingguide.ai/introduction/basics).

Next, we'll cover some common prompt engineering techniques. For each section, there will be a small challenge. You'll share your responses to each section on a Google Form that the club leader shares with you. You'll also have access to other people's responses, to stalk---I mean learn.

Now, let's go into some specifics!
![](https://cloud-o5nnqusk0-hack-club-bot.vercel.app/0giphy.gif)

### Zero-Shot Prompting
> ❓ Using zero-shot prompting, come up with a sentence of your own and ask ChatGPT to classify it as spam or safe :)

> 🤔 Share your responses and ChatGPT's output on the propmting Google Form that your club leader will share with you

ZSP is essentially giving the model no "training" before asking it a question. This "technique" is what most people use. 

For example, try the following prompt, and come up with your own:
```w!
**User**
Classify the text into neutral, negative or positive. 
Text: I think the vacation is okay.
Sentiment:

**ChatGPT**
Neutral
```

While this will work for common problems, it may fail on more unique prompts.

### Few-Shot Prompting
> ❓ Using few-shot prompting, ask ChatGPT to output "yes" or "no", based on whether the following words are examples of physical activity. The words are "running" and "diving" However, you cannot tell ChatGPT that it needs to classify for physical activity. Come up with a few examples, like:

```w!
**User**
Swimming | yes
Walking | yes
Sitting | no
Running | 
Diving | 
```

FSP relies on the user providing a couple of examples of expected output to the model, before asking the model to produce its own. If you think about it, giving the model some training examples is very similar to how a human learns. For example:

```w!
**User**
A "whatpu" is a small, furry animal native to Tanzania. An example of a sentence that uses
the word whatpu is:
We were traveling in Africa and we saw these very cute whatpus.
To do a "farduddle" means to jump up and down really fast. An example of a sentence that uses
the word farduddle is:

**ChatGPT***
When we won the game, we all started to farduddle in celebration.
```

### Chain-of-Thought Prompting
> ❓ Using chain-of-thought prompting, see if you can get ChatGPT to explain the hidden meaning behind a difficult-to-read poem from English class

When using Chain-of-Thought prompting, you'll want to ask the model to **explain the intermediate reasoning steps** before giving the final answer. 

Here's an [example](https://towardsdatascience.com/prompt-engineering-guide-for-data-analysts-54f480ba4d98):
![](https://cloud-6v5c2pm6e-hack-club-bot.vercel.app/0image.png)

Telling the model to solve it "step by step" helps it **think through its own answer**, giving more accurate results.

Here's [another example](https://ai.googleblog.com/2022/05/language-models-perform-reasoning-via.html) (note that you can also "show" the model what step by step looks like):
![](https://cloud-aaphlohmn-hack-club-bot.vercel.app/0image.png)

### Generated Knowledge Prompting
> ❓ Using generated knowledge prompting, get ChatGPT to write a three paragraph essay on why comics and AI belong together. 

> 🤔 Remember to keep posting these into the Google Form your club leader sent you!

You can think of [GKP](https://arxiv.org/pdf/2110.08387.pdf) as the model **"searching for information itself"**. Here, you ask the model to provide the most relevant facts related to a topic, and then ask the model to generate an answer based on these facts.

These two screenshots are one example of GKP.

[Generating the information](https://towardsdatascience.com/prompt-engineering-guide-for-data-analysts-54f480ba4d98) ("the search"):
![](https://cloud-7rs0kqnrj-hack-club-bot.vercel.app/0image.png)

[Using information to make answer](https://towardsdatascience.com/prompt-engineering-guide-for-data-analysts-54f480ba4d98) ("the answer"):
![](https://cloud-5gt4oyd57-hack-club-bot.vercel.app/0image.png)

### Self-Refine Prompting
> ❓ Using self-refine prompting, ask ChatGPT to generate a function (in your choice of programming language) to play the game [fizzbuzz](https://en.wikipedia.org/wiki/Fizz_buzz#:~:text=Fizz%20buzz%20is%20a%20group,with%20the%20word%20%22fizzbuzz%22.). Though arguably Python is the best language hehe

![](https://cloud-lfhygu0v3-hack-club-bot.vercel.app/0coding.gif)

You can think of SFP as the model "teaching itself". First, the user asks the model to provide an initial solution. Next, the user asks the model for problems with its original solution. Afterward, the user prompts the model to address the problems in its solution. This process can repeat until the user is happy with the result.

For example:
```w!
**User**
come up with a short positive review for a cactus I bought from amazon

**ChatGPT**
Absolutely thrilled with my Amazon cactus purchase! 🌵 It arrived in perfect condition and looks stunning on my desk. Low-maintenance and full of character, it adds a delightful touch of nature to my workspace. Highly recommend for anyone seeking a charming and easy-to-care-for plant companion! 🌿👍

**User**
where is this review lacking?

**ChatGPT**
While the short positive review covers some important points, it could benefit from a few improvements to make it more comprehensive and informative:

Description of the cactus: The review doesn't provide specific details about the cactus's type or any distinctive features. Adding a sentence or two about the cactus's appearance, such as its size, shape, or unique characteristics, would give readers a better idea of what to expect.

Personal experience: While the review mentions being "absolutely thrilled" with the purchase, it doesn't elaborate on the reasons for the excitement. Sharing a brief personal experience with the cactus, such as how it has enhanced the workspace or brought joy, would make the review more relatable and engaging.

Long-term satisfaction: The review doesn't mention how long the cactus has been owned or whether it has maintained its appearance and health over time. Including a comment on the cactus's longevity and continued satisfaction would add value to the review.

Comparison with other cacti or plants: Adding a few words about how this cactus compares to others the reviewer might have owned or seen in terms of ease of care, aesthetics, or uniqueness would make the review more informative for potential buyers.

By incorporating these elements, the review could become more well-rounded and provide potential buyers with a more complete and helpful perspective on the Amazon cactus purchase.

**User**
incorporate this feedback into your original short positive review

**ChatGPT**
Absolutely thrilled with my Amazon cactus purchase! 🌵 The Golden Barrel cactus arrived in perfect condition, boasting a delightful round shape and vibrant green color that looks stunning on my desk. Low-maintenance and full of character, it adds a delightful touch of nature to my workspace, brightening up my day with its charm. I've had it for several months now, and it has maintained its health and appearance beautifully, making it a long-term source of joy. Compared to other cacti I've owned, this one stands out for its ease of care and unique aesthetics. Highly recommend for anyone seeking a charming and easy-to-care-for plant companion! 🌿👍
```

### Tree-of-Thought Prompting
> ❓ Since tree of thought prompting is a bit more difficult than the others to use, we challenge you to come up with a scenario in which tree prompting could be very useful. Maybe even feed it to ChatGPT. 

TOT is structured just like you think it would! First, the user asks the model to provide possible solutions to a problem. Next, the user asks the model to "run through" each of those solutions, to figure out the best one. 

Here's an example of a [ToT prompt](https://www.promptingguide.ai/techniques/tot):
```w!
Imagine three different experts are answering this question.
All experts will write down 1 step of their thinking,
then share it with the group.
Then all experts will go on to the next step, etc.
If any expert realises they're wrong at any point then they leave.
The question is...
```

ChatGPT's response:
```w!
Expert 1: The ball is in the living room.

Expert 2: The ball is in the kitchen.

Expert 3: The ball is in the bedroom.

Expert 1: Bob carries the cup to the bedroom, so the ball must be in the cup.

Expert 2: Oh, I see my mistake. Yes, the ball is in the cup.

Expert 3: Agreed, the ball is in the cup in the bedroom.

Expert 1: Next, Bob turns the cup upside down in the bedroom.

Expert 2: After that, Bob walks to the garden and puts the cup down.

Expert 3: Therefore, the ball must have fallen out of the cup when Bob turned it upside down in the bedroom. So, the ball is in the bedroom, not in the cup anymore.

Expert 1: Oh, you're right. I made a mistake. The ball is in the bedroom, not in the cup.

Expert 2: Agreed, the ball is in the bedroom.

Expert 3: Bob then walks to the garage, so the ball remains in the bedroom. It is not in the garden or the garage.

Expert 1: Absolutely, the ball is still in the bedroom.

Expert 2: Yes, the ball hasn't moved from the bedroom.

Expert 3: Therefore, the ball is in the bedroom, not in the garden or the garage.

All three experts agree that the ball is in the bedroom.
```

## DAD JOKE COMPETITION
AHA you didn't think you could skip this, did you >:) Here are the rules. Using the prompting techniques from above, generate five of your best dad jokes.

![](https://cloud-54mgddtet-hack-club-bot.vercel.app/0image.png)

Your club leader will send a Google Form to everyone. At the end of the **five minutes**, submit your five jokes.

Next, the club leader will share the responses spreadsheet. Please vote for the top 3 best jokes (no voting for your own).

***GOOD LUCK!***

<details>
    <summary>If you're interested, here's the prompt I used (using Chain of Thought prompting)</summary>

```w!
**User**
generate 5 dad jokes for me. explain why each of them are funny and how you got to each one

**ChatGPT**
Sure, here are five dad jokes for you:

Why don't scientists trust atoms?
Because they make up everything!
Explanation: This joke is a play on words. "Atoms" make up everything in the physical world, but the punchline humorously suggests that they are untrustworthy as they "make up" stories or lies.

Did you hear about the kidnapping at the playground?
He woke up!
Explanation: This joke uses a pun to create humor. The word "kidnapping" is used in a misleading way, making the listener think it refers to a serious event. But, the punchline reveals that it's about a child taking a nap at the playground, using "woke up" in its colloquial sense.

What do you call fake spaghetti?
An impasta!
Explanation: This joke is a classic example of a pun. The word "impasta" sounds similar to "impostor," but it humorously refers to fake spaghetti rather than a person.

Why don't some couples go to the gym?
Because some relationships don't work out!
Explanation: This joke uses a play on words. "Work out" usually refers to going to the gym to exercise, but in the context of relationships, it means that some couples don't succeed or "work out" together.

Why did the scarecrow win an award?
Because he was outstanding in his field!
Explanation: This joke is a clever play on words. The phrase "outstanding in his field" is usually used to describe someone who excels in their profession or area of expertise. In this joke, it takes a literal interpretation, as the scarecrow is literally standing in a field.

Dad jokes often rely on puns, wordplay, and clever twists on common phrases or sayings to create a lighthearted and cheesy sense of humor. They are intentionally simple and cheesy, designed to elicit groans and eye-rolls from the audience, making them a favorite form of humor for many dads and joke enthusiasts alike.
```

</details>


## 🧠 Brainstorming
Now onto the comic book! Take the next five minutes and come up with what you want the broad topic of your comic book to be about. Some of my (ehhrmm, or ChatGPT's)

1. **Fantasy Quest**: Follow the adventures of a group of unlikely heroes as they embark on a quest to save their world from an ancient evil. Along the way, they encounter mythical creatures, magical artifacts, and test the limits of their friendship and bravery.
2. **Space Explorers**: Set in the distant future, a team of intrepid astronauts explores uncharted regions of the universe, encountering alien civilizations, cosmic mysteries, and discovering the wonders and dangers of deep space.
3. **Magical Academy**: Attend a prestigious school for young wizards and witches as they learn to master their magical abilities. Follow their misadventures, magical duels, and the challenges they face while navigating the complexities of both the magical and human worlds.

The idea I'll be using for the rest of this jam will be about a student who wants to get his privte pilot license!

## Creating the Comic Book Outline
Sweet! Now that you have a general idea of what you want your comic to be about, we'll use ChatGPT to create a more detailed outline.

Our comic will be 8 text sections, and have 8 corrosponding pictures.


Using one of the prompt engineering techniques above, use your topic and ask ChatGPT for a an outline for the 8 sections of your comic. 

<details>
    <summary>
        Open this up to see my comic outline!
    </summary>
    
Section 1: **Introduction**
Meet Alex, a passionate high school student in North Carolina who dreams of earning his private pilot license and is inspired by his aviation enthusiast father. He's determined to make his dream take flight and wants to prove himself both to his father and himself.

Section 2: **Setting Goals**
Alex sets his goal to earn his private pilot license, but he also grapples with self-doubt and worries about the challenges ahead. As he researches flight schools and requirements, he seeks guidance from his father and the local aviation community, discovering the support and encouragement they offer.

Section 3: **Flight School Adventures**
Alex enrolls in a reputable local flight school, where he meets his flight instructor, Captain Johnson, who is known for his strict yet caring teaching style. Alex also befriends fellow aviation enthusiasts, Sarah and Mike, who become his study buddies and support system. As they bond over their shared passion, the friendship among the trio deepens.

Section 4: **Challenges and Doubts**
Flight training proves to be more challenging than Alex anticipated. He faces setbacks, struggles with complex concepts, and experiences moments of self-doubt. However, his determination and the encouragement from his family and friends keep him going. Through their support, he learns to overcome his doubts and embrace the learning process.

Section 5: **Solo Flight**
After weeks of training, Alex faces a significant milestone – his first solo flight. The mixture of excitement and nervousness consumes him as he takes control of the aircraft alone, realizing the responsibility and freedom that comes with flying solo. This pivotal moment marks a turning point in his journey, boosting his confidence and reinforcing his passion for aviation.

Section 6: **Flight Test Preparation**
As the flight test date approaches, Alex's anxiety mounts, and he dedicates every spare moment to practice with Captain Johnson. He also learns valuable life lessons about perseverance, discipline, and the importance of staying calm under pressure. With Captain Johnson's mentorship, he hones his skills, building his confidence for the upcoming test.

Section 7: **Overcoming Obstacles**
On the day of the flight test, unexpected weather conditions challenge Alex's skills and decision-making. He must navigate through turbulence, demonstrating his proficiency as a pilot while keeping his composure in difficult situations. The test pushes him to apply everything he's learned, revealing his growth as a pilot and an individual.

Section 8: **Achieving Success**
Despite the challenges faced during the flight test, Alex successfully completes it and earns his private pilot license. His hard work, determination, and growth throughout the journey make the achievement all the more fulfilling. As he soars above North Carolina, he knows that this is just the beginning of his lifelong passion for flying. The comic ends on a high note, emphasizing the importance of pursuing one's dreams and the support of loved ones in making them a reality.
</details>

<details>
    <summary>If you're interested in seeing my outline process with ChatGPT (using the self-refine prompting technique), open this up!</summary>
    
**User**
I'm currently making a comic about a highs school student in North Carolina who wants to earn his private pilot license. This comic will have 8 sections.  Can you please write up a rough outline of each of these 8 sections? Each section should be 1-2 sentences.

**ChatGPT**
Sure! Here's a rough outline of the eight sections for your comic:

Section 1: Introduction
Introduce the protagonist, a high school student named Alex, who dreams of earning his private pilot license and is inspired by his aviation enthusiast father.

Section 2: Setting Goals
Alex sets his goal to earn his private pilot license and starts researching flight schools and requirements for obtaining the license.

Section 3: Flight School Adventures
Alex enrolls in a local flight school, where he meets his flight instructor, Captain Johnson, and begins his exhilarating flight training.

Section 4: Challenges and Doubts
As Alex faces the challenges of learning to fly, he becomes frustrated and starts doubting his abilities. Encouragement from his family and friends helps him persevere.

Section 5: Solo Flight
After weeks of training, Alex takes his first solo flight, experiencing a mix of excitement and nervousness as he takes control of the aircraft alone.

Section 6: Flight Test Preparation
With the final flight test approaching, Alex practices rigorously with Captain Johnson, determined to prove his skills and earn his private pilot license.

Section 7: Overcoming Obstacles
As the flight test day arrives, unexpected weather conditions challenge Alex's abilities, but he stays calm, remembering the lessons he learned during training.

Section 8: Achieving Success
Alex successfully completes his flight test, earning his private pilot license and fulfilling his dream. The comic ends with him flying high above North Carolina, realizing that hard work and perseverance can make dreams take flight.

Keep in mind that you can add more details, dialogue, and illustrations to expand each section and bring the story to life. Happy comic-making!




**User**
Where is this outline lacking?

**ChatGPT**
The outline provides a general structure for the comic, but it could benefit from some additional elements to enhance the storytelling and character development. Here are some areas where the outline could be further improved:

Character Development: The outline briefly introduces the protagonist, Alex, but it could delve deeper into his personality, motivations, and personal challenges. Adding more depth to his character will make readers more invested in his journey.

Supporting Characters: Consider introducing supporting characters such as Alex's friends, family, or fellow students at the flight school. These characters can provide a support system for Alex and add more dynamics to the story.

Conflict and Plot Twists: While the outline mentions challenges during flight training and unexpected weather conditions, it could benefit from additional plot twists and conflicts that Alex must overcome, making the story more engaging and unpredictable.

Emotional Arc: Think about incorporating emotional highs and lows throughout the comic. This can include moments of triumph, self-doubt, determination, and moments of joy and accomplishment.

Aviation Themes: Since the comic is about a student earning his private pilot license, consider highlighting specific aviation-related themes and details to add authenticity and interest to the story.

Art Style and Settings: Although not explicitly mentioned in the outline, consider how the art style will complement the story and help set the scene for each section. Visual details can enhance the overall storytelling experience.

By expanding on these aspects, the comic will become more immersive and resonate with readers on a deeper level. The additional details will create a more well-rounded and engaging narrative that captures the journey of a high school student pursuing his dream of becoming a pilot.




**User**
incorporate this feedback into the original 8 section outline, with 1-2 sentences per section

**ChatGPT**
Sure, let's incorporate the feedback into the original 8 section outline:

Section 1: Introduction
Meet Alex, a passionate high school student in North Carolina who dreams of earning his private pilot license and is inspired by his aviation enthusiast father. He's determined to make his dream take flight.

Section 2: Setting Goals
Alex sets his goal to earn his private pilot license, but he also grapples with self-doubt and worries about the challenges ahead. As he researches flight schools and requirements, he seeks guidance from his father and aviation community.

Section 3: Flight School Adventures
Alex enrolls in a reputable local flight school, where he meets his flight instructor, Captain Johnson, who is known for his strict yet caring teaching style. Alex also befriends fellow aviation enthusiasts, Sarah and Mike, who become his study buddies and support system.

Section 4: Challenges and Doubts
Flight training proves to be more challenging than Alex anticipated. He faces setbacks, struggles with complex concepts, and experiences moments of self-doubt. However, his determination and the encouragement from his family and friends keep him going.

Section 5: Solo Flight
After weeks of training, Alex faces a significant milestone – his first solo flight. The mixture of excitement and nervousness consumes him as he takes control of the aircraft alone, realizing the responsibility and freedom that comes with flying solo.

Section 6: Flight Test Preparation
As the flight test date approaches, Alex's anxiety mounts, and he dedicates every spare moment to practice with Captain Johnson. He also learns valuable life lessons about perseverance, discipline, and the importance of staying calm under pressure.

Section 7: Overcoming Obstacles
On the day of the flight test, unexpected weather conditions challenge Alex's skills and decision-making. He must navigate through turbulence, demonstrating his proficiency as a pilot while keeping his composure in difficult situations.

Section 8: Achieving Success
Despite the challenges faced during the flight test, Alex successfully completes it and earns his private pilot license. His hard work, determination, and growth throughout the journey make the achievement all the more fulfilling. As he soars above North Carolina, he knows that this is just the beginning of his lifelong passion for flying.

By incorporating more character development, emotional arcs, aviation themes, and detailed settings, the comic will offer readers a more immersive and engaging experience. This well-rounded approach will allow readers to connect with Alex on a deeper level and share in his triumphs and challenges as he pursues his dream of becoming a pilot.




**User**
Where else is this new outline lacking?

**ChatGPT**
The new outline is more detailed than the previous one, but there are still a few areas where it could be further improved:

Pacing: While the outline covers different stages of Alex's journey, it's essential to ensure that the pacing flows smoothly. Consider balancing the time spent on each section, making sure that the story doesn't feel rushed or dragged out.

Visual and Artistic Elements: The outline provides a strong narrative foundation, but it would benefit from mentioning specific visual and artistic elements that will enhance the storytelling. Consider describing the art style, character designs, and key visual moments.

Relationship Development: The outline introduces supporting characters, but it could be enhanced by focusing on the development of relationships between Alex, his flight instructor, and fellow students. This can add depth and emotional resonance to the story.

Themes and Lessons: While the outline hints at lessons learned, it could be strengthened by explicitly stating some of the core themes and life lessons that readers will take away from the comic.

Potential Subplots: Think about adding potential subplots that can add depth and complexity to the story. Subplots can involve challenges outside of flying, personal growth, or conflicts that complement the main narrative.

Emotional Impact: Ensure that the emotional impact of the story is emphasized throughout the outline. Consider how the comic will evoke feelings of excitement, tension, joy, and determination in readers.

By addressing these areas, the outline will become more comprehensive, allowing for a well-crafted and captivating comic that resonates with its audience on multiple levels. Remember, the more thought and detail put into the outline, the smoother the comic creation process will be.




**User**
incorporate this feedback into the 8 section outline, with 1-2 sentences per section

**ChatGPT**
Certainly! Let's incorporate the additional feedback into the 8 section outline:

Section 1: Introduction
Meet Alex, a passionate high school student in North Carolina who dreams of earning his private pilot license and is inspired by his aviation enthusiast father. He's determined to make his dream take flight and wants to prove himself both to his father and himself.

Section 2: Setting Goals
Alex sets his goal to earn his private pilot license, but he also grapples with self-doubt and worries about the challenges ahead. As he researches flight schools and requirements, he seeks guidance from his father and the local aviation community, discovering the support and encouragement they offer.

Section 3: Flight School Adventures
Alex enrolls in a reputable local flight school, where he meets his flight instructor, Captain Johnson, who is known for his strict yet caring teaching style. Alex also befriends fellow aviation enthusiasts, Sarah and Mike, who become his study buddies and support system. As they bond over their shared passion, the friendship among the trio deepens.

Section 4: Challenges and Doubts
Flight training proves to be more challenging than Alex anticipated. He faces setbacks, struggles with complex concepts, and experiences moments of self-doubt. However, his determination and the encouragement from his family and friends keep him going. Through their support, he learns to overcome his doubts and embrace the learning process.

Section 5: Solo Flight
After weeks of training, Alex faces a significant milestone – his first solo flight. The mixture of excitement and nervousness consumes him as he takes control of the aircraft alone, realizing the responsibility and freedom that comes with flying solo. This pivotal moment marks a turning point in his journey, boosting his confidence and reinforcing his passion for aviation.

Section 6: Flight Test Preparation
As the flight test date approaches, Alex's anxiety mounts, and he dedicates every spare moment to practice with Captain Johnson. He also learns valuable life lessons about perseverance, discipline, and the importance of staying calm under pressure. With Captain Johnson's mentorship, he hones his skills, building his confidence for the upcoming test.

Section 7: Overcoming Obstacles
On the day of the flight test, unexpected weather conditions challenge Alex's skills and decision-making. He must navigate through turbulence, demonstrating his proficiency as a pilot while keeping his composure in difficult situations. The test pushes him to apply everything he's learned, revealing his growth as a pilot and an individual.

Section 8: Achieving Success
Despite the challenges faced during the flight test, Alex successfully completes it and earns his private pilot license. His hard work, determination, and growth throughout the journey make the achievement all the more fulfilling. As he soars above North Carolina, he knows that this is just the beginning of his lifelong passion for flying. The comic ends on a high note, emphasizing the importance of pursuing one's dreams and the support of loved ones in making them a reality.

By incorporating these elements into the outline, the comic will offer readers a more immersive and emotionally resonant experience, providing a well-crafted and captivating narrative that reflects Alex's growth and achievement in pursuing his dream of becoming a pilot.
</details>


## Generating the Images
Now, we'll be generating the images that go along with the text in each section! We'll be using [Stable Diffusion](https://stablediffusionweb.com/#demo) to turn a string of text into an image. Other alternatives include DALL-E and Midjourney, or any other text to image AI model!

**Image Generation Prompting**
In addition to prompt engineering for ChatGPT, you can also carefully craft prompts for image generators to create an image *you would love*. In a prompt for an image generator, it is good to include:
- **Artists to take inspiration from**: Albert Bierstadt, Edward Hopper, Vincent van Gogh, etc
- **Format of the picture**: 3d render, Action Photography, Cartoon, Comic, Pencil Drawing, etc
- **Perspective**: Aerial View, Close Up, Boken, etc
- **Style**: Abstract, Ancient Art, Anime, etc

To practice prompt engineering for text-to-image generators, head to [tools.saxifrage.xyz/prompt](https://tools.saxifrage.xyz/prompt)

You can also read more about prompt engineering for image generators on [towardsdatascience.com](https://towardsdatascience.com/a-beginners-guide-to-prompt-design-for-text-to-image-generative-models-8242e1361580).


However, since we've used ChatGPT to generate the comic outline so far, we might as well use it to also generate the images!

Let's start with my first section:
```w!
Meet Alex, a passionate high school student in North Carolina who dreams of earning his private pilot license and is inspired by his aviation enthusiast father. He's determined to make his dream take flight and wants to prove himself both to his father and himself.
```

We'll ask ChatGPT to generate a prompt for Stable Diffusion:
```w!
**User**
Since I'm making the comic. I would like to generate pictures for each section. I'll be using Stable Diffusion to generate these pictures. For the first section: "Meet Alex, a passionate high school student in North Carolina who dreams of earning his private pilot license and is inspired by his aviation enthusiast father. He's determined to make his dream take flight and wants to prove himself both to his father and himself," can you please create a prompt for Stable Diffusion to generate the image?

**ChatGPT**
Prompt for Stable Diffusion:
"Create an image of a passionate high school student named Alex in North Carolina. He is inspired by his aviation enthusiast father and dreams of earning his private pilot license. In the image, Alex is determined and focused, with a determined expression on his face, showcasing his commitment to making his dream of becoming a pilot take flight. The background should feature aviation elements or a subtle representation of his aspirations. The image should capture the essence of his determination and desire to prove himself to his father and himself."

By providing this prompt to Stable Diffusion, the AI model will attempt to generate an image that represents the description you provided, bringing the character of Alex to life in a visual form that aligns with your comic's vision.

**User**
Please make the prompt more relatable to comics

**ChatGPT**
Certainly! Here's a more comic-focused prompt for Stable Diffusion:

Prompt for Stable Diffusion:
"Create a vibrant comic-style illustration featuring Alex, a determined high school student in North Carolina, who dreams of earning his private pilot license. Show Alex with a wide-eyed expression of excitement and wonder as he looks up at the sky filled with airplanes and clouds. Let his aviation enthusiast father be there, wearing a pilot's cap and sharing in his son's enthusiasm, supporting him in his journey. Surround them with motivational aviation posters and aviation-themed décor in the background, symbolizing Alex's aspirations and determination to soar high in the sky. Make sure to capture the essence of Alex's passion for flying and his desire to prove himself, both to his father and to himself, in the details of their expressions and body language."
```

When feeding in a prompt to Stable Diffusion, you'll get four images. If you don't like them, feel free to adjust the prompt or click "Generate image" again. The image I liked the most was:

![](https://cloud-41es9von4-hack-club-bot.vercel.app/0image.png)

Make sure to save these images to your computer, as you'll be creating a website with them!

Continue doing this for the rest of the 8 sections.

<details>
    <summary>If you're interested in the prompts and images I used, open this up!</summary>

**Prompt 1**: Create a vibrant comic-style illustration featuring Alex, a determined high school student in North Carolina, who dreams of earning his private pilot license. Show Alex with a wide-eyed expression of excitement and wonder as he looks up at the sky filled with airplanes and clouds. Let his aviation enthusiast father be there, wearing a pilot's cap and sharing in his son's enthusiasm, supporting him in his journey. Surround them with motivational aviation posters and aviation-themed décor in the background, symbolizing Alex's aspirations and determination to soar high in the sky. Make sure to capture the essence of Alex's passion for flying and his desire to prove himself, both to his father and to himself, in the details of their expressions and body language.
    
![](https://cloud-41es9von4-hack-club-bot.vercel.app/0image.png)

**Prompt 2**: Create an expressive comic-style illustration depicting Alex's journey of setting his sights on earning his private pilot license. Show Alex in his room, surrounded by aviation posters, airplane models, and flight manuals, symbolizing his determination and focus on his dream. Capture the conflict of emotions on his face as he grapples with self-doubt and worries about the challenges ahead. Let his reflection in a mirror reveal a mix of determination and uncertainty, highlighting his inner struggle. Meanwhile, show his aviation enthusiast father by his side, offering encouraging words and support, showcasing their close bond. In the background, include scenes of Alex researching flight schools and requirements online, interacting with the local aviation community, and receiving valuable guidance, symbolizing the network of support he discovers. The illustration should portray both the emotional journey and the determination he gains from his support system, emphasizing the resilience of his character and the hope for a bright future in aviation
    
![](https://cloud-htzl0ftuj-hack-club-bot.vercel.app/0image.png)

**Prompt 3**: Create an engaging comic-style illustration showcasing Alex's exciting journey as he enrolls in a reputable local flight school to pursue his dream of becoming a pilot. Illustrate the moment he meets his flight instructor, Captain Johnson, who exudes an air of authority and experience. Show Captain Johnson with a caring yet firm expression, emphasizing his strict yet nurturing teaching style. As Alex interacts with his fellow aviation enthusiasts, Sarah and Mike, illustrate the budding friendship among the trio, capturing their shared passion for flying. They are seen exchanging aviation books, sharing stories, and cheering each other on during their flight training. The illustration should portray a sense of camaraderie and mutual support, highlighting the bond they form over their common aspirations and dedication to aviation. In the background, include scenes of the flight school's hangar, airplanes, and aviation-themed decorations, setting the stage for their exciting journey into the world of aviation
    
![](https://cloud-i1teccyai-hack-club-bot.vercel.app/0image.png)
    
**Prompt 4**: Create a vibrant comic-style illustration portraying the challenges and triumphs of Alex's flight training journey. Show Alex in the cockpit of a training aircraft, facing various difficulties while practicing complex flight maneuvers. Illustrate his expressions, body language, and interactions with his flight instructor, Captain Johnson, to convey the emotional ups and downs of the learning process. In contrast, depict heartwarming scenes of Alex's family and friends offering support and encouragement, standing by him through setbacks. Showcase a transformative moment where Alex's determination begins to shine through, as he gains confidence and embraces the learning process. Use dynamic poses and facial expressions to evoke empathy and admiration for Alex's resilience. In the background, include scenes of the flight school environment and other student pilots practicing, emphasizing the sense of community and shared experiences in aviation. The illustration should capture the essence of Alex's growth as a pilot, the power of determination, and the importance of a support system in overcoming challenges

![](https://cloud-ih2dlt9xb-hack-club-bot.vercel.app/0image.png)
    
**Prompt 5**: Craft a captivating comic-style illustration capturing the momentous occasion of Alex's first solo flight. Show Alex in the cockpit of a training aircraft, dressed in his flight gear, with a mix of excitement and nervousness evident on his face. Illustrate the aircraft's controls, surrounding instruments, and the vast sky outside, symbolizing the responsibility and freedom he feels as he takes control of the aircraft alone. Depict his flight instructor, Captain Johnson, watching from the ground with pride and confidence in his student's abilities. Use dynamic and expressive poses to convey the emotional intensity of the moment. In the background, include elements of the flight school environment, such as other planes and student pilots, adding to the sense of accomplishment and community. The illustration should capture the essence of Alex's personal growth, boosted confidence, and unwavering passion for aviation as he embarks on this significant turning point in his journey as a pilot."

![](https://cloud-3wvlrjhsi-hack-club-bot.vercel.app/0image.png)
    
**Prompt 6**: Create a compelling comic-style illustration portraying the build-up to Alex's flight test. Show Alex and Captain Johnson in intense flight training sessions, with Alex's expressions conveying his mounting anxiety and determination to excel. Illustrate the cockpit environment, with flight instruments and checklists, to depict the preparation and focus required for the test. Highlight moments of perseverance and discipline as Alex dedicates himself to rigorous practice. Use Captain Johnson's mentorship and supportive gestures to show the valuable life lessons he imparts to Alex, emphasizing the importance of staying calm under pressure. Incorporate visual cues, such as a calendar marking the approaching test date, to build suspense. In the background, include scenes of the flight school and other student pilots, reflecting the atmosphere of anticipation and determination. The illustration should capture the emotional intensity and the valuable growth experiences that Alex undergoes in preparation for the flight test, showcasing his resilience and commitment to becoming a skilled pilot.
    
![](https://cloud-6y6x41yaf-hack-club-bot.vercel.app/0image.png)
    
**Prompt 7**: Create an intense comic-style illustration capturing the pivotal flight test day for Alex. Show Alex in the cockpit of the aircraft, surrounded by stormy skies and turbulent weather, symbolizing the unexpected challenges he faces. Illustrate his focused expression and confident posture as he navigates through the turbulence, demonstrating his proficiency as a pilot. Use dynamic poses and flight maneuvers to convey the intensity of the situation. Depict the aircraft's controls and instruments to emphasize his decision-making skills under pressure. Show Captain Johnson observing from the ground with a mix of concern and pride, reflecting the stakes of the test. As Alex applies everything he's learned, illustrate moments of growth as both a pilot and an individual, capturing the sense of achievement and self-assurance. In the background, include elements of the flight school and other planes, adding to the immersive atmosphere of the test environment. The illustration should showcase the test's challenging nature, the demonstration of Alex's growth, and the significance of this day in his journey as a skilled pilot

![](https://cloud-m3sbbrf3q-hack-club-bot.vercel.app/0image.png)
    
**Prompt 8**: Create a triumphant comic-style illustration capturing the moment when Alex successfully completes his flight test and earns his private pilot license. Show Alex in the cockpit of the aircraft, with a jubilant expression and a sense of accomplishment evident on his face. Illustrate the flight test examiner presenting him with the pilot license, symbolizing the achievement of his dream. Use dynamic poses and a celebratory atmosphere to convey the excitement of the moment. In the background, include scenes of North Carolina's landscape, with the sky painted in warm hues during sunset or sunrise, signifying the beginning of a new chapter in Alex's life as a pilot. Show his family and friends cheering from the ground, reflecting the support and love that made this accomplishment possible. The illustration should portray the culmination of Alex's hard work, determination, and growth throughout the journey, showcasing the importance of pursuing one's dreams and the joy of achieving them with the backing of loved ones.
    
![](https://cloud-1ns1fl309-hack-club-bot.vercel.app/0image.png)
    
</details>

## Creating the Website
Now that you have your text and images, we'll be creating a website to host the comic. This way you're able to easily share it with your friends.

Also, if you have no experience with web development, don't panic, we'll walk you through each step.

**Getting started with the template**
1. First, using the [provided site template](https://replit.com/@GanningXu/ComicAiSiteTemplate?v=1), click "Fork"
2. Name the template anything you'd like. For example, you could use the title of your comic.
3. Now you should have an editable version that looks like this!
![](https://cloud-h8lzbpzlx-hack-club-bot.vercel.app/0screenshot_2023-07-26_at_9.39.15_pm.png)

**Upload your images**
1. In the left file pane, click the three dots, and then click "Upload File":
![](https://cloud-hq2einq2r-hack-club-bot.vercel.app/0screenshot_2023-07-26_at_9.41.23_pm.png)
2. Using your file explorer, upload all the saved images that Stable Diffusion (or whichever image generator you used) created. After uploading, your file pane should look something like this (of course, your files may have different names).
![](https://cloud-ebgrxv038-hack-club-bot.vercel.app/0screenshot_2023-07-26_at_9.42.37_pm.png)

**Editing the HTML file**
1. Let's get the images and text you uploaded onto your site!
3. Click into `index.html` on the file pane
4. On line 12, replace "Comic Title Goes Here" with the title of your comic. 
5. Replace `<source>` with the filename of your first image. 
6. Next, replace "description goes here" with the ChatGPT generated text for the first section. 
7. Scroll down, and do the same with `<source 2>` and "description 2 goes here"
8. Repeat the process by replacing `<source x>` and "description x goes here" until you finish the last one (8).


For example, since the filename of my first image is called `img1.png` and filename of my second image is `img2.jpeg`, my `index.html` file looks like: 

![](https://cloud-mctosy4p1-hack-club-bot.vercel.app/0screenshot_2023-07-26_at_9.50.44_pm.png)

**Getting the URL**
1. To get the sharable URL for your new site, first click the green "Run" button at the top of your screen.
2. Next, find the URL of the "embeded" browser, where your site is showing, and copy that URL, as shown below!
![](https://cloud-90323bbsa-hack-club-bot.vercel.app/0screenshot_2023-07-26_at_9.58.02_pm.png)

Feel free to share that URL with friends/family :) HOORAY, YOU DID IT!!!

![](https://cloud-5y24e2iqg-hack-club-bot.vercel.app/0minions-yay.gif)

## Extensions
If you're feeling adventurous (or just want to learn something new), here are some extensions you can try out!
- **Add more images**: If you want to add more images to your comic, you can use the same process as above to generate the images. Then, simply upload them to the file pane on the left, and add them to the `index.html` file.
- **Add a CSS stylesheet**: To make your site look even cooler, you can add a CSS stylesheet. You can learn more about CSS [here](https://www.w3schools.com/css/). To add a CSS stylesheet, simply create a new file called `style.css` and add your CSS code in there.
- **Add more formatting to your comic**: You can add more formatting to your comic by adding HTML tags to your text. For example, you can add headings by using the `<h1>` tag, or add bold text by using the `<b>` tag. You can learn more about HTML tags [here](https://www.w3schools.com/html/html_formatting.asp).
- **Add more images to the website**: You can add more images to your website by uploading them to the file pane on the left, and then adding them to the `index.html` file. You can learn more about HTML images [here](https://www.w3schools.com/html/html_images.asp).
- **Add a title**: You can add a title to your comic by adding a `<title>` tag to your `index.html` file. You can learn more about the `<title>` tag [here](https://www.w3schools.com/tags/tag_title.asp).
- **Add a favicon**: You can add a favicon to your comic by adding a `<link>` tag to your `index.html` file. You can learn more about favicons [here](https://www.w3schools.com/tags/tag_link.asp).
- **Add a description**: You can add a description to your comic by adding a `<meta>` tag to your `index.html` file. You can learn more about the `<meta>` tag [here](https://www.w3schools.com/tags/tag_meta.asp).
- **Add a background color**: You can add a background color to your comic by adding a `<body>` tag to your `index.html` file. You can learn more about the `<body>` tag [here](https://www.w3schools.com/tags/tag_body.asp).
- **Add a background image**: You can add a background image to your comic by adding a `<body>` tag to your `index
