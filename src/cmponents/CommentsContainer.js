import React from "react";

const commentData = [
  {
    name: "wahid ali",
    text: " lets build a youtube apps",
    replies: [
      {
        name: "wahid ali",
        text: " lets build a youtube apps",
        replies: [
          {
            name: "wahid ali",
            text: " lets build a youtube apps",
            replies: [
              {
                name: "wahid ali",
                text: " lets build a youtube apps",
                replies: [
                  {
                    name: "wahid ali",
                    text: " lets build a youtube apps",
                    replies: [
                      {
                        name: "wahid ali",
                        text: " lets build a youtube apps",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "wahid ali",
                    text: " lets build a youtube apps",
                    replies: [],
                  },
                ],
              },
              {
                name: "wahid ali",
                text: " lets build a youtube apps",
                replies: [],
              },
              {
                name: "wahid ali",
                text: " lets build a youtube apps",
                replies: [
                  {
                    name: "wahid ali",
                    text: " lets build a youtube apps",
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            name: "wahid ali",
            text: " lets build a youtube apps",
            replies: [],
          },
        ],
      },
      {
        name: "wahid ali",
        text: " lets build a youtube apps",
        replies: [],
      },
    ],
  },
  {
    name: "wahid ali",
    text: " lets build a youtube apps",
    replies: [
      {
        name: "wahid ali",
        text: " lets build a youtube apps",
        replies: [],
      },
    ],
  },
  {
    name: "wahid ali",
    text: " lets build a youtube apps",
    replies: [],
  },
  {
    name: "wahid ali",
    text: " lets build a youtube apps",
    replies: [
      {
        name: "wahid ali",
        text: " lets build a youtube apps",
        replies: [],
      },
    ],
  },
  {
    name: "wahid ali",
    text: " lets build a youtube apps",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex mt-2 border border-b-gray-100  items-center p-2  rounded-lg">
      <img
        className="h-8"
        alt="comments image"
        src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
      ></img>
      <div className="ml-4">
        <p className="font-bold">{name}</p>
        <p className=""> {text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />

      <div className="ml-12 border border-l-black border-transparent">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="px-10 ml-16 mt-7 ">
      <h1 className="font-bold text-2xl mb-5">Comments:-</h1>

      <CommentsList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
