
// Meta Pixel Initialization - Dual Setup
!function(f,b,e,v,n,t,s){
  if(f.fbq)return;n=f.fbq=function(){
    n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments);
  };
  if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];
  t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s);
}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

// Pixel 1 - Auto Event
fbq('init', '1108149820224074');
fbq('track', 'PageView');

// Pixel 2 - Manual Event
fbq('init', '228194266859979');
fbq('track', 'PageView');

document.addEventListener('click', function(e) {
  if (e.target && e.target.id === 'register_submit_button') {
    fbq('trackSingle', '228194266859979', 'Subscribe', {
      value: 1.50,
      currency: 'USD'
    });
  }
});

if (window.location.pathname === '/mobile/register-done') {
  if (!localStorage.getItem('registration_done_pixel')) {
    fbq('trackSingle', '228194266859979', 'CompleteRegistration', {
      value: 3.00,
      currency: 'USD'
    });
    localStorage.setItem('registration_done_pixel', 'true');
  }
}

document.addEventListener('click', function(e) {
  const el = e.target;
  const text = (el.textContent || '').toLowerCase();
  const className = (el.className || '').toLowerCase();

  if (
    (text.includes('deposit') || className.includes('deposit')) &&
    window.location.pathname === '/mobile/deposit' &&
    !localStorage.getItem('starttrial_done_pixel')
  ) {
    fbq('trackSingle', '228194266859979', 'StartTrial', {
      value: 2.00,
      currency: 'USD'
    });
    localStorage.setItem('starttrial_done_pixel', 'true');
  }
});
