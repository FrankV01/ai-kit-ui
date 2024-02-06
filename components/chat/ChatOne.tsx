"use client"; //We can see if this stuff can run from the server later. Not now.
import {
  MessageBox,
  ChatList,
  IChatItemProps,
  Input,
  Button,
} from "react-chat-elements";
import React, { useCallback, useMemo } from "react";

const MockData: IChatItemProps[] = [
  {
    id: "80540635",
    avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
    alt: "kursat_avatar",
    title: "Example1",
    //subtitle: "Why don't we go to the No Way Home movie this weekend ?",
    date: new Date(Date.now() - 12304501),
    unread: 3,
  },
  {
    id: "253471",
    avatar: "https://avatars.githubusercontent.com/u/253471?v=4",
    alt: "kursat_avatar",
    title: "Full Name",
    //subtitle: "Why don't we go to the No Way Home movie this weekend ?",
    date: new Date(Date.now() - 12304),
    unread: 0,
  },
];

export default function ChatOne({ className }: { className?: string }) {
  //https://detaysoft.github.io/docs-react-chat-elements/docs/messagelist
  // This would represent the list of people chatting.
  // I'd be fine with a Community version and a per user version. Though community version would
  // need to keep any market associated to the user.
  //
  //We're considering the div and container to be a apart of the UI. I want to be clear on that
  const longMsgExample =
    "Fromage frais boursin monterey jack. Cheeseburger chalk and cheese paneer queso swiss cheese triangles camembert de normandie stilton. Parmesan edam cheese triangles paneer cheddar cheesy grin cheese strings stinking bishop. Cheesecake say cheese say cheese roquefort cheesecake airedale queso st. agur blue cheese. Melted cheese cheese and biscuits edam.\n\nBrie cheese strings cheddar. Stilton the big cheese parmesan cheese and wine airedale cheese strings halloumi halloumi. Cheeseburger cut the cheese mascarpone halloumi cheese slices cheese and biscuits taleggio goat. Cauliflower cheese monterey jack emmental cheese and wine gouda.\n";
  const aiResponseExample =
    "Meow meow pee in shoe walk on a keyboard, purr when give birth, yet ask for petting, vommit food and eat it again, and give attitude, and terrorize the hundred-and-twenty-pound rottweiler and steal his bed, not sorry. Hide when guests come over under the bed claws in the eye of the beholder but if human is on laptop sit on the keyboard but find a way to fit in tiny box snuggles up to shoulders or knees and purrs you to sleep play with twist ties. Wack the mini furry mouse instantly break out into full speed gallop across the house for no reason let me in let me out let me in let me out let me in let me out who broke this door anyway for catch eat throw up catch eat throw up bad birds. Don't nosh on the birds. Pretend you want to go out but then don't wack the mini furry mouse or asdflkjaertvlkjasntvkjn (sits on keyboard) cough furball into food bowl then scratch owner for a new one sit on human they not getting up ever. Hunt anything swat at dog i rule on my back you rub my tummy i bite you hard yet i can haz, eat an easter feather as if it were a bird then burp victoriously, but tender. Behind the couch. Scratch the furniture gnaw the corn cob, but poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, eat a squirrel, hide from fireworks, lick toe beans, attack christmas tree so jump on fridge, yet fart in owners food gnaw the corn cob. Licks paws ooh, are those your $250 dollar sandals? lemme use that as my litter box please let me outside pouty face yay! wait, it's cold out please let me inside pouty face oh, thank you rub against mommy's leg oh it looks so nice out, please let me outside again the neighbor cat was mean to me please let me back inside scratch mess up all the toilet paper meow in empty rooms trip owner up in kitchen i want food. Scratch the box check cat door for ambush 10 times before coming in cat sit like bread but sit on human. Disappear for four days and return home with an expensive injury; bite the vet i do no work yet get food, shelter, and lots of stuff just like man who lives with us kick up litter. Mark territory. Meow to be let in stare at the wall, play with food and get confused by dust x i just saw other cats inside the house and nobody ask me before using my litter box if it fits, i sits but allways wanting food and love. Whatever going to catch the red dot today going to catch the red dot today. Rub butt on table eat grass, throw it back up stand in doorway, unwilling to chose whether to stay in or go out play with twist ties pushes butt to face for need to chase tail decide to want nothing to do with my owner today.";

  const UserMessageExample = () => {
    return (
      <>
        <MessageBox
          forwarded={false}
          notch={false}
          position={"right"}
          focus={false}
          removeButton={false}
          replyButton={false}
          title={"Frank"}
          titleColor={"#000000"}
          date={new Date()}
          status={"sent"}
          text={"a message goes here"}
          id={"chat_box"}
          retracted={false}
          type={"text"}
        />
        <MessageBox
          forwarded={false}
          notch={false}
          position={"right"}
          focus={false}
          removeButton={false}
          replyButton={false}
          title={"Frank"}
          titleColor={"#000000"}
          date={new Date()}
          status={"sent"}
          text={longMsgExample}
          id={"chat_box"}
          retracted={false}
          type={"text"}
          reply={{
            title: "reply-example-1",
            titleColor: "#8717ae",
            message: "Wow. Long message",
          }}
        />
      </>
    );
  };
  const AiResponseExample = () => {
    return (
      <>
        <MessageBox
          forwarded={false}
          notch={false}
          position={"right"}
          focus={false}
          removeButton={false}
          replyButton={false}
          title={"AI"}
          titleColor={"#000000"}
          date={new Date()}
          status={"received"}
          text={aiResponseExample}
          id={"chat_box"}
          retracted={false}
          type={"text"}
        />
        <MessageBox
          forwarded={false}
          notch={false}
          position={"right"}
          focus={false}
          removeButton={false}
          replyButton={false}
          title={"AI"}
          titleColor={"#000000"}
          date={new Date()}
          status={"received"}
          text={" a short ai message"}
          id={"chat_box"}
          retracted={false}
          type={"text"}
        />
      </>
    );
  };
  const AllMessageExamples = () => {
    return (
      <>
        <UserMessageExample />
        <AiResponseExample />
      </>
    );
  };

  return (
    <div className={`text-reset text-start ${className || ""}`}>
      <p>
        Contains the elements. Now we have to make it look integrated and on
        brand.
      </p>
      <div id={"true_start_of_chat_one"} className="container text-center ">
        <div className="row ">
          <div className="col-3 ">
            <ChatList
              id={"chat_list"}
              className="chat-list text-reset text-start"
              dataSource={MockData}
              lazyLoadingImage={""}
            />
          </div>
          <div className="text-start text-reset col bg-white">
            <AllMessageExamples />
            <div>
              <Input
                placeholder="Type here..."
                multiline={false}
                maxHeight={25}
              />
              <Button
                text={"Send"}
                onClick={() => alert("Sending...")}
                title="Send"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
