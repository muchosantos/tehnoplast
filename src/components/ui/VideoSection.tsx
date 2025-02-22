import React from 'react';

const VideoSection: React.FC = () => {
    return (
        <div className="w-full h-[350px] md:h-[50vh] lg:h-[600px] xl:h-[600px]">
        <video loop muted autoPlay playsInline className="w-full h-full object-cover">
          <source src="/video/onama-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
};

export default VideoSection;