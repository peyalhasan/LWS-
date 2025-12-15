
import { Suspense, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import './App.css'
import PostSelector from './Components/PostSelector'
import Comments from './Components/Comments'

function App() {

  const [selectedPostId, setSelectedPostId] = useState(null)

  const handleSelectPost = (e) => {
    setSelectedPostId(e.target.value)
  }

  return (
    <div>
      <ErrorBoundary fallback={<h1 className='error' >Error fetching posts </h1>} >
        <Suspense fallback={<div>Loading Posts...</div>} >
          <PostSelector onSelectPost={handleSelectPost} />
        </Suspense>
      </ErrorBoundary>

      {selectedPostId &&
        <ErrorBoundary fallback={<h1 className='error'>Error fetching comments </h1>} >
          <Suspense fallback={<div>Loading Comments...</div>} >
            <Comments postId={selectedPostId} />
          </Suspense>
        </ErrorBoundary>
      }

    </div>
  )
}

export default App
