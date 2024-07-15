import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollY = window.scrollY;

            const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;

            setScrollPercentage(scrollPercent);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <div
            id="progress-container"
            style={{
                height: '4px',
                width: '100%',
                position: 'fixed',
                top: '0',
                left: '0',
                right: '0',
                zIndex: '2000',
                background: 'transparent',
            }}
        >
            <div
                className="progress-fill"
                style={{ height: '100%', width: `${scrollPercentage}%`, backgroundColor: '#4291EB' }}
            ></div>
        </div>
    );
};

export default ProgressBar;

{/* <Header />
       <ProgressLine />
         <div className={styles.main}>
         <div className={styles.socialPanel}>
             <a target='_blank' rel="noopener noreferrer" href={`https://www.linkedin.com/shareArticle?mini=true&url=https://duefocus.com/blog/${node.md}`}><img src={linkedin} alt="linkedin"/></a>
             <a target='_blank' rel="noopener noreferrer" href={`https://twitter.com/share?url=http://duefocus.com/blog/${node.md}`}><img src={twitter} alt="twitter"/></a>
             <div data-href={`https://duefocus.com/blog/${node.md}`}><a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fduefocus.com%2F&amp;src=sdkpreparse"><img src={facebook} alt="facebook"/></a></div>
         </div>
         <div
             style={{backgroundImage: 'url(' + node.previewImg.file.url + ')'}}
             className={styles.header}>
          <div>
              <div className={styles.integrations}>{node.category}</div>
              <h1>{node.title}</h1>
              <div>
                  <img src="" alt=""/>
                  <img src="" alt=""/>
             </div>
          </div>
        </div>
          <div className={styles.block}>
              <div className={styles.left}>
                 <img src={node.avatar.file.url} alt="avatar"/>
                 <div>
                     <span>Published on {moment(node.date).format('DD MMM YYYY')}</span>
                     <h5>{node.authorName}</h5>
                     <p>{node.authorPosition}</p>
                     {/* <h6>8 articles</h6> */}
        //          </div>
        //       </div>
        //       <div className={styles.right}>
        //          <div>
        //              <a target='_blank' rel="noopener noreferrer" href={`https://www.linkedin.com/shareArticle?mini=true&url=https://duefocus.com/blog/${node.md}`}><img src={linkedin} alt="linkedin"/></a>
        //              <a target='_blank' rel="noopener noreferrer" href={`https://twitter.com/share?url=http://duefocus.com/blog/${node.md}`}><img src={twitter} alt="twitter"/></a>
        //              <div data-href={`https://duefocus.com/blog/${node.md}`}><a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fduefocus.com%2F&amp;src=sdkpreparse"><img src={facebook} alt="facebook"/></a></div>
        //          </div>
        //          <button>Subscribe</button>
        //       </div>
        //   </div>
        //   <div className={styles.content}>
        //      <h2>{node.title}</h2>
        //      <div dangerouslySetInnerHTML={{ __html: text }}></div>
        //   </div>
        //   <div className={styles.relatedPosts}>
        //     {
        //       // isHaveRelatedPosts &&
        //        <div className={styles.head}>
        //          <h3>Related Posts</h3>
        //          <span 
        //            onClick={()=> window.history.back()}
        //          >See All</span>
        //        </div>
        //     }
        //     <RelatedPosts 
        //      category={node.category} 
        //      md={node.md}
        //     //  setRelatedPostsVisibility={setRelatedPostsVisibility}
        //     />
        //   </div>
        //  </div>
        //  <Footer /> */}