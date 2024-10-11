import { useState } from 'react';

type ElementState = 'hidden' | 'open' | 'close';

/**
 * Allows to toggle an element visibility with animation
 */
function useAnimatedVisibility() {
  const [elementState, setElementState] = useState<ElementState>('hidden');

  function toggleElement() {
    setElementState(elementState == 'hidden' ? 'open' : 'close');
  }

  function hideElement() {
    elementState == 'open' && setElementState('close');
  }

  function afterElementAnimation() {
    elementState == 'close' && setElementState('hidden');
  }

  return { elementState, toggleElement, hideElement, afterElementAnimation };
}

export { useAnimatedVisibility };
