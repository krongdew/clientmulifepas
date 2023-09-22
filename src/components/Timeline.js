import '../components/Timeline.css'
import React, { useEffect } from 'react';
import $ from 'jquery';
import '../components/Timeline.css'; // นำเข้าสไตล์ CSS ของคุณ

const Timeline = () => {
    useEffect(() => {
      // Globals
      const prefixes = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      const $container = $('.container');
      const $timeline = $('.timeline');
      const $timelineItem = $('.timeline-item');
      const $timelineContent = $('.timeline-content');
      const $dropDown = $('.dropdown');
      let $hasHovered = true;
      const hideOnExit = false;
      let $hasBounced = true;
  
      // mouseenter event handler
      $timelineItem.on('mouseenter', function(e) {
        // โค้ดในการ hover ของคุณ
        var isSelected = $(this).hasClass('selected');
  
        if ( isSelected === false ) {
        
            var isSelected = $(this).hasClass('selected');
  
            if ( isSelected === false ) {
            
              var leftPos = $(this).position().left,
                  left    = leftPos - 88,
                  $that   = $(this);
          
              $timelineItem.removeClass('selected');
              $(this).addClass('selected');
          
              if ( $hasHovered === false ) {
                // Show Bounce
          
                  // Set Flag
                  $hasHovered = true;
          
                  // Show DD Bounce
                  showBounce(left);
          
                  // Show DD content Bounce
                  showContentBounce($that);
          
              } else {
                // Follow
          
                  // Change pos of DD to follow
                  dropDownFollow(left);
          
                  // Hide previous dd content
                  $timelineContent.removeClass('animated fadeIn bounceIn');
          
                  // Show hovered dd content
                  $that.find($timelineContent).addClass('animated fadeIn');
              }
            }
            
          }});
    
      // mouseleave event handler
      $timeline.on('mouseleave', function(e) {
        if (hideOnExit) {
   
            //   Set Flag
            $hasHovered = false;
        
            // Hide DD
            hideDropDown();
        
            // Hide DD content
            $timelineContent.removeClass('animated fadeIn');
            
          }
          
        });
    
  
      // Animation end event listener
      $dropDown.on(prefixes, function(e) {
        if (e.originalEvent.animationName === 'fadeOut') {
          $dropDown.removeAttr('style');
        }
      });
  
      // Private functions that do showing/hiding/animating
      function showContentBounce(that) {
        $hasBounced = true;
        that.find('.timeline-content').addClass('animated bounceIn');
      }
  
      function showBounce(pos) {
        $dropDown.css('left', pos + 'px').removeClass('fadeOut').addClass('animated bounceIn');
      }
  
      function dropDownFollow(pos) {
        $dropDown.css('left', pos + 'px');
      }
  
      function hideDropDown() {
        $timelineItem.removeClass('selected');
        $dropDown.removeClass('bounceIn').addClass('fadeOut');
      }
    }, []); // เรียกใช้ useEffect เมื่อ component ถูก render และไม่มีการเปลี่ยนแปลงของ dependencies

    
  return (
    <>
        
  <div className="container">
    
    <div className="timeline flex-container">

      <div className="timeline-item flex-items-default selected">
        <div className="timeline-content text-left animated bounceIn">
          <h2>Explore</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eveniet nulla amet, sapiente voluptatum praesentium.</p>
          <div className="hexagon"></div>
          
        </div>
      </div>
      <div className="timeline-item flex-items-default">
        <div className="timeline-content text-left">
          <h2>Plan</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eveniet nulla amet, sapiente voluptatum praesentium.</p>
          <div className="hexagon"></div>
         
        </div>
      </div>
      <div className="timeline-item flex-items-default">
        <div className="timeline-content text-left">
          <h2>Production</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eveniet nulla amet, sapiente voluptatum praesentium.</p>
          <div className="hexagon"></div>
         
        </div>
      </div>
      <div className="timeline-item flex-items-default">
        <div className="timeline-content text-left">
          <h2>Review</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eveniet nulla amet, sapiente voluptatum praesentium.</p>
          <div className="hexagon"></div>
         
        </div>
      </div>
      <div className="timeline-item flex-items-default">
        <div className="timeline-content text-left">
          <h2>Ship</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eveniet nulla amet, sapiente voluptatum praesentium.</p>
          <div className="hexagon"></div>
          
        </div>
      </div>

      <div className="dropdown animated bounceIn" style={{left:-88}}>
        <div className="inner">
          <div className="arrow-down"></div>
        </div>
      </div>

    </div>
  </div>


    </>
  )
}

export default Timeline