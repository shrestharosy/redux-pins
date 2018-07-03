import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';

class SinglePhoto extends Component {

    render() {
        const { postId } = this.props.params;
        const i = this.props.posts.findIndex((post) => post.code === postId);
        const post = this.props.posts[i];
        const postComments = this.props.comments[postId] || [];
        
        return (
            <div className='single-photo'> 
                <Photo index={i} post={post} {...this.props} />
                <Comments postComments={postComments} {...this.props}/>
            </div>
        )
    }
}

export default SinglePhoto;