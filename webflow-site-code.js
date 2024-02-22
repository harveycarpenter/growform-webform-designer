window.growform = window.growform || {};

    window.addEventListener("message", growform_receiveMessage, false);

    function growform_receiveMessage(event) {

      if(!event || !event.data || !event.data.action) {
          return;
      }

      if(!event.data.growform_embed_id) {
        return;
      }

      let embedId = event.data.growform_embed_id.toLowerCase();

      if (event.data.action == "growform_resize_height") {
        growform_resizeHeight(event.data.height, embedId);
    }

  
    }


    function growform_resizeHeight(height, growform_embed_id) {
      let heightInt = parseInt(height);
      let targetClass = "growform-container-" + growform_embed_id;
      heightInt = Math.round(height) + 16;
      height = heightInt + "px";
      let targetElement = document.getElementsByClassName(targetClass)[0];
      targetElement.style.height = height;
    }
  