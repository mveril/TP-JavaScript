const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

const table = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    }
  ];

  let nameTitle = document.querySelector('.name-title');
  let jobTitle = document.querySelector('.job-title');
  let desc = document.querySelector('.desc');
  let imgProfil = document.querySelector('.profile-picture');
  function updateSlide(position) {
    console.log(position);
    const item = table[position];
    nameTitle.innerText = item.name.split(" ").map(word=>word[0].toUpperCase()+ word.slice(1)).join(" ");
    jobTitle.innerText = item.job.toUpperCase();
    desc.innerText = item.text;
    imgProfil.setAttribute('src',item.img);
  }
  let position = 0;
  updateSlide(position);



  btnPrev.addEventListener('click', function()
  {
    if(position === 0)
    {
        position = table.length - 1;
    }
    else
    {
        position = position - 1;
    }
    updateSlide(position);
  });

  btnNext.addEventListener('click', function()
  {
    if(position === table.length - 1)
    {
        position = 0;
    }
    else
    {
        position = position + 1
    }
    updateSlide(position);
  });