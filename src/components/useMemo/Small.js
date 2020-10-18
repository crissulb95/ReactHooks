import React, { memo } from 'react'

export const Small = memo(({ value }) => {
    console.log('something');
    return (
        <small>
            { value }
        </small>
    )
}
)