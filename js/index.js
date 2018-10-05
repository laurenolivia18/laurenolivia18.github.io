//pseudo code for DGB homepage
// - Use the ```$.ready()``` handler to delay your code from executing until all DOM assets have been loaded
$(document).ready(function () {

/*GALLERY VIEW and BIRD INFO BOXES*/
//Upon click of bird photo, use "this", .find and slideDown to display the .info of the selected bird.
//Upon click of 'Read Less'/up arrow icon, use slideUp and display:none for hide the info and return the bird to its previous state. 
//Upon click of a bird while one bird's info box is already open/displayed, hide previous bird's info box and slide down new bird choice's info box.
    function readmore(){
        $(this)
          .find(".info")
          .slideDown();
    }
    $(".bird").click(function(){
        $(this).find(".info").toggle();
    
    });

    function mobileIntro(){
        $(this)
            .find(".intro")
            .slideDown();

    }
    $(".logo").click(function(){
        $(this).find(".intro").toggle();

    });

    $('#hamburger').click(function (){
        $("#sidebarList").slideToggle();
    });

    $('.yellow').click(function () {

        $('.bird:not(".yellowChat")').hide();

        console.log("Hide yellowChat");



    });

    $(".blackBirds").click(function() {
        $('.bird:not(".blackbirdsOrioles")').hide();
    });
    $(".cardinals").click(function () {
        $('.bird:not(".cardinalsGrosbeaksBuntings")').hide();
    });
    $(".chick").click(function () {
        $('.bird:not(".chickadees")').hide();
    });
    $(".creep").click(function () {
        $('.bird:not(".creepers")').hide();
    });
    $(".crows").click(function () {
        $('.bird:not(".crowsMagpiesJays")').hide();
    });
    $(".finch").click(function () {
        $('.bird:not(".finches")').hide();
    });
    $(".king").click(function () {
        $('.bird:not(".kinglets")').hide();
    });
    $(".lar").click(function () {
        $('.bird:not(".larks")').hide();
    });
    $(".mock").click(function () {
        $('.bird:not(".mockingbirdsThrashers")').hide();
    });
    $(".newSp").click(function () {
        $('.bird:not(".sparrowNew")').hide();
    });
    $(".nut").click(function () {
        $('.bird:not(".nuthatches")').hide();
    });
    $(".shryke").click(function () {
        $('.bird:not(".shrikes")').hide();
    });
    $(".thr").click(function () {
        $('.bird:not(".thrush")').hide();
    });
    $(".tyr").click(function () {
        $('.bird:not(".tyrantFlycatchers")').hide();
    });
    $(".vir").click(function () {
        $('.bird:not(".vireos")').hide();
    });
    $(".wax").click(function () {
        $('.bird:not(".waxwings")').hide();
    });
    $(".wood").click(function () {
        $('.bird:not(".woodWarblers")').hide();
    });
    $(".wren").click(function () {
        $('.bird:not(".wrens")').hide();
    });

    $(".allBirds").click(function() {
      $('.bird').show();
    });


    // // Get the modal
    // var modal = document.getElementById('myModal');

    // // Get the image and insert it inside the modal - use its "alt" text as a caption
    // var img = document.getElementByID('myImg');
    // var modalImg = document.getElementByID("img01");
    // var captionText = document.getElementById("caption");
    // img.onclick = function () {
    //     modal.style.display = "block";
    //     modalImg.src = this.src;
    //     captionText.innerHTML = this.alt;
    // }

    // // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName("close")[0];

    // // When the user clicks on <span> (x), close the modal
    // span.onclick = function () {
    //     modal.style.display = "none";
    // }
/*SIDE BAR*/
//Upon click of bird family from the list of choices in the sidebar, use slideDown and display functions to display info and song for that bird. 

    // function filter(){
    //     $(".woodWarblers")
    //       .siblings()
    //       .hide();
    // }

    // $(".sidebarList a").click(function(){

    // }


/*INFINITE SCROLL & MASONRY*/
    // var Imgs = [
    //     'images/American Crow.jpg',
    //     'images/American Goldfinch.jpg',
    //     'images/American Redstart.jpg',
    //     'images/American Robin.jpg',
    //     'images/American TreeSparrow.jpg',
    //     'images/Bachmans sparrow.jpg',
    //     'images/baltimore oriole.jpg',
    //     'images/Black-and-white Warbler.jpg',
    //     'images/Black-Throated_Blue_Warbler.jpg',
    //     'images/Blackpoll Warbler.jpg',
    //     'images/Blue Jay.jpg',
    //     'images/Blue-gray Gnatcatcher.jpg',
    //     'images/Bobolink.jpg',
    //     'images/Brown Creeper.jpg',
    //     'images/Brown Thrasher.jpg',
    //     'images/Cedar Wax Wing.jpg',
    //     'images/Chestnut-Sided Warbler.jpg',
    //     'images/Chipping Sparrow.jpg',
    //     'images/Common Yellowthroat.jpg',
    //     'images/Dark-eyed Junco.jpg',
    //     'images/Dickcissel.jpg',
    //     'images/Eastern Blue Bird.jpg',
    //     'images/Eastern Kingbird.jpg',
    //     'images/Eastern Meadowlark.jpg',
    //     'images/Eastern Phoebe.jpg',
    //     'images/Eastern Towhee.jpg',
    //     'images/Eastern Wood Pewee.jpg',
    //     'images/Fox Sparrow.jpg',
    //     'images/Gray Catbird.jpg',
    //     'images/Great Crested Flycatcher.jpg',
    //     'images/Henslows Sparrow.jpg',
	// 	'images/Hermit Thrush.jpg',
    //     'images/Horned Lark.jpg',
    //     'images/House Finch.jpg',
    //     'images/House Wren.jpg',
    //     'images/HouseWren - 1024px.jpg',
    //     'images/Indigo Bunting.jpg',
    //     'images/Kentucky warbler.jpg',
    //     'images/Loggerhead Shrike.jpg',
    //     'images/Louisiana Waterthrush.jpg',
    //     'images/Marsh Wren.jpg',
    //     'images/Northern Cardinal.jpg',
    //     'images/Northern Mocking Bird.jpg',
    //     'images/Northern Parula.jpg',
    //     'images/Orchard Oriole.jpg',
    //     'images/Ovenbird.jpg',
    //     'images/Pine Siskin.jpg',
    //     'images/Prothonotary Warbler.jpg',
    //     'images/Purple Finch.jpg',
    //     'images/Purple Martin.jpg',
    //     'images/Red Crossbill.jpg',
    //     'images/Red-breasted Nuthatch.jpg',
    //     'images/Red-eyed Vireo.jpg',
    //     'images/Red-winged Blackbird.jpg',
    //     'images/Rosebreasted Grosbeak.jpg',
    //     'images/Ruby-crowned Kinglet.jpg',
    //     'images/Rusty Black Bird.jpg',
    //     'images/Scarlet Tanager.jpg',
    //     'images/Song Sparrow.jpg',
    //     'images/Summer Tanager.jpg',
    //     'images/Swainsons Thrush.jpg',
    //     'images/Tree Swallow.jpg',
    //     'images/Tufted Titmouse.jpg',
    //     'images/Veery.jpg',
    //     'images/Vesper Sparrow.jpg',
    //     'images/WarblingVireo08.jpg',
    //     'images/White-Breasted_Nuthatch.jpg',
    //     'images/White-crowned Sparrow.jpg',
    //     'images/White-throated Sparrow.jpg',
    //     'images/Willow Flycatcher.jpg',
    //     'images/Wilsons Warbler.jpg',
    //     'images/Winter Wren.jpg',
    //     'images/Wood Thrush.jpg',
    //     'images/Yellow Warbler.jpg',
    //     'images/Yellow-breasted Chat.jpg',
    // ]

    // $grid = $('.infiniteGallery');

    // $.fn.revealItems = function ($items) {

    //     var iso = this.data('isotope');
    //     var itemSelector = iso.options.itemSelector;
    //     $items.hide();
    //     $(this).append($items);
    //     $items.imagesLoaded().progress(function (imgLoad, image) {
    //         var $item = $(image.img).parents(itemSelector);
    //         $item.show();
    //         iso.appended($item);
    //     });

    //     return this;
    // }
    // $grid.isotope({
    //   containerStyle: null,
    //   masonry: {
    //     columnWidth: 100,
    //     gutterWidth: 5
    //   },
    //   itemSelector: ".grid-item",
    //   filter: "*",
    //   transitionDuration: "0.4s"
    // });

    // $grid.imagesLoaded().progress(function () {
    //     $grid.isotope();
    // })

    // function GenerateItems() {
    //     var items = '';
    //     for (var i = 0; i < 20; i++) {
    //         items += '<div class="grid-item c' + (i % 9) + ' wow fadeInUp" ><img src="' + Imgs[i % Imgs.length] + '" /></div>';
    //     }
    //     return $(items);
    // }

    // function Infinite(e) {
    //     if ((e.type == 'scroll') || e.type == 'click') {
    //         var doc = document.documentElement;
    //         var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    //         var bottom = top + $(window).height();
    //         var docBottom = $(document).height();

    //         if (bottom + 50 >= docBottom) {
    //             $grid.revealItems(GenerateItems());
    //         }
    //     }
    // }

    // $grid.revealItems(GenerateItems());

    // $(document).on('click', '.filter-item', function () {
    //     $('.filter-item.active').removeClass('active');
    //     $(this).addClass('active');
    //     var f = $(this).data('f');
    //     console.log(f);
    //     $grid.find('.grid-item').removeClass('wow').removeClass('fadeInUp');
    //     $grid.isotope({ filter: f });

    // })


    // $(window).resize(function () {
    //     var margin = 40;
    //     var padding = 15;
    //     var columns = 0;
    //     var cWidth = 300;
    //     var windowWidth = $(window).width();

    //     var overflow = false;
    //     while (!overflow) {
    //         columns++;
    //         var WidthTheory = ((cWidth * columns) + ((columns + 1) * padding) + margin);
    //         if (WidthTheory > windowWidth)
    //             overflow = true;
    //     }
    //     if (columns > 1)
    //         columns--;

    //     var GridWidth = ((cWidth * columns) + ((columns + 1) * padding) + margin);

    //     if (GridWidth != $('#grid').width()) {
    //         $('#grid').width(GridWidth);
    //     }
    // });
    // $(window).scroll(Infinite);
    // new WOW().init();

})






/*SEARCH BAR*/
//Utilize tags somehow to be able to filter classes?

