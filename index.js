n = 4
var container = document.querySelector('.container');
var box = document.querySelector('.box');
for (var i = 1; i < n * n; i++) {               //construct grid
	var clonedBox = box.cloneNode(true);
	container.insertBefore(clonedBox, box);
}
var $grid = $(container).packery({
	columnWidth: 200,
	itemSelector: '.box'
});

var $items = $grid.find('.box').draggable();
$grid.packery( 'bindUIDraggableEvents', $items );
