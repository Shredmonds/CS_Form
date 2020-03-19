handleSubmit = event => {
  const data = new FormData();
  for (var i = 0; i < this.state.selectedFile.length; i++) {
    data.append("file", this.state.selectedFile);
  }
  console.log(this.state);
  axios
    .post("198.54.116.142", this.state)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};
