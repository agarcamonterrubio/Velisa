const galleryData = [
    {
      title: "Custom Invitations",
      img: "images/download.jpg",
      desc: "Elegant handmade wedding invitation with floral elements."
    },
    {
      title: "Personalized Journals",
      img: "images/book.jpg",
      desc: "Leather-bound journal with engraved name and quote."
    },
    {
      title: "Cameo Gift Tags",
      img: "images/download2.jpg",
      desc: "Whimsical gift tags created with precision cutting."
    }
  ];
  
  const galleryContainer = document.getElementById("gallery");
  
  if (galleryContainer) {
    galleryData.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${item.title}</h3>
        <img loading="lazy" src="${item.img}" alt="${item.title}" />
        <p>${item.desc}</p>
      `;
      galleryContainer.appendChild(card);
    });
  }
  
  const form = document.getElementById("velisaForm");
  const formMessage = document.getElementById("formMessage");
  
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      const formData = {
        name,
        email,
        message,
        submittedAt: new Date().toISOString()
      };
  
      localStorage.setItem("velisaFormSubmission", JSON.stringify(formData));
  
      formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
      form.reset();
    });
  }
   