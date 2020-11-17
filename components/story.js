export default function Story() {
    return (
      <>
        <style jsx>
          {`
            h3 span {
              background: #1565c0;
              width: 1.5em;
              height: 1.5em;
              line-height: 1.5em;
              border-radius: 50%;
              display: inline-block;
              text-align: center;
              margin-right: 0.3em;
              margin-left: -0.3em;
              box-shadow: 0 3px 16px rgba(0, 0, 0, 0.2);
              color: white;
            }
            @media only screen and (min-width: 768px) {
              .how-it-works-boxes {
                display: grid;
                grid-template-columns: auto auto auto;
                grid-gap: 30px;
              }
  
              a {
              text-decoration: none;
              style="color:blue;"
              }
            }
          `}
        </style>
        <div className="how-it-works-boxes">
        </div>
        <div className="how-it-works-description">
          <p>
          Secure PDF caters to the insecurity teachers face when giving their students notes and course-related material the teacher has come up with, himself. Often, students share notes he received from one teacher to other classmates and friends who do not even attend the same tuitions. If the teacher is famous for the notes he provides, he needs to make sure his notes are not distributed everywhere to keep his tuitions running lest students will prefer to take that teacher’s notes from mates they have studying with the teacher.
        </p>
        <p>
        This has become especially a challenge during these hard times where teachers need to share their notes online to us, the students. Due to this, teachers are often sending notes as PDF documents which can be very easily downloaded and shared with others. We are here to stop these illegal dealings of notes.
        </p>
        <p>
        We came up with a simple yet such a powerful idea. We take in a PDF document the teacher uploads, break it down into the pages it consists of, convert them to images, chop off those images into distributed fragments and zip them up! Well, yes — that’s a lot of things.
        </p>
        <p>
        Simply put, we convert the PDF document into chopped up images, a single of which doesn’t make sense. It’s like tearing a paper into multiple pieces and storing them. When this paper is required to be viewed, a complicated algorithm joins those pieces back together. Since this is not any more a PDF document but fragments of images, sharing the document becomes extremely challenging!
        </p>
        <p>
        We have taken it a bit further — we have disabled screenshots and wrapped the app inside. This was necessary because the notes could have been screenshotted and sent over to others.
        </p>
        <p>
        Apart from these, teachers also have control on the access power of a student. He can easily remove students (who may have left their tuitions) and can also very easily people in groups or batches the teacher may already have. Every document can be given an access scope over a group. Students in a group will all have the same documents they all can access.
        </p>
        <p>
        Our solution gives back the power to the teachers themselves. They’re in charge!
        </p>
        </div>
      </>
    );
  }
  