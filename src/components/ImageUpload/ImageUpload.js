import React, { Component } from "react";
import { connect } from "react-redux";

class ImageUpload extends Component {
  render() {
    const uploadOptions = {
      server: "http://localhost:4000",
      signingUrlQueryParams: { uploadType: "avatar" },
    };
    const s3Url = "https://my-bucket.s3.amazonaws.com";

    return (
      <DropzoneS3Uploader
        onFinish={this.handleFinishedUpload}
        s3Url={s3Url}
        maxSize={1024 * 1024 * 5}
        upload={uploadOptions}
      />
    );
  }
}

export default connect()(ImageUpload);
