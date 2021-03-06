import React, { Component } from 'react';
import cn from './utilities/classnames';

import { SGLibraryImage } from './image-library';
import Styles from './styles/image-library-thumbnail-list.module.scss';

export interface ImageLibraryThumbnailListProps {
  images: Array<SGLibraryImage>;
  onThumbnailClick: (image?: SGLibraryImage) => void;
  selectedImage?: SGLibraryImage;
}

export class ImageLibraryThumbnailList extends Component<
  ImageLibraryThumbnailListProps
> {
  public render() {
    const { images, onThumbnailClick, selectedImage } = this.props;

    return (
      <section className={Styles.list}>
        {images.map(image => (
          <ImageLibraryThumbnail
            key={image.id}
            image={image}
            isSelected={selectedImage && selectedImage.id === image.id}
            onClick={onThumbnailClick}
          />
        ))}
      </section>
    );
  }
}

interface ImageLibraryThumbnailProps {
  image: SGLibraryImage;
  isSelected: boolean;
  onClick: (image: SGLibraryImage) => void;
}

class ImageLibraryThumbnail extends Component<ImageLibraryThumbnailProps> {
  public render() {
    const { isSelected, image } = this.props;
    const { uploadPercent, thumbnailUrl } = image;
    const isUploading = uploadPercent !== undefined && uploadPercent < 99;

    return (
      <div
        className={cn(Styles['thumbnail-container'], {
          [Styles['is-uploading']]: isUploading,
          [Styles['is-selected']]: isSelected,
        })}
        onClick={this.onClick}
      >
        {isUploading && (
          <span className={Styles['upload-progress-container']}>
            <div
              className={Styles['upload-progress']}
              style={{ width: `${uploadPercent}%` }}
            />
          </span>
        )}
        <img src={thumbnailUrl} />
      </div>
    );
  }

  private onClick = () => {
    const { onClick, image } = this.props;
    onClick(image);
  };
}

export default ImageLibraryThumbnailList;
