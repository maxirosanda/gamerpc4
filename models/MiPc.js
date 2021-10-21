class MiPc {
    constructor(id, title, image,description,userId,lat,lng) {
      this.id = id.toString();
      this.title = title;
      this.image = image;
      this.description=description;
      this.userId=userId;
      this.lat=lat,
      this.lng=lng
    }
  }
  
  export default MiPc;