import { useEffect, useState } from 'react';

/**
 * Checks reactively if a css media query is satisfied or not
 */
function useMatchMediaQuery(mediaQuery: string) {
  const [isMatch, setIsMatch] = useState(() => matchMedia(mediaQuery).matches);

  useEffect(() => {
    function onMatchChange(event: MediaQueryListEvent) {
      setIsMatch(event.matches);
    }

    const matcher = matchMedia(mediaQuery);
    setIsMatch(matcher.matches);
    matcher.addEventListener('change', onMatchChange);
    return () => matcher.removeEventListener('change', onMatchChange);
  }, [mediaQuery]);

  return isMatch;
}

export { useMatchMediaQuery };
