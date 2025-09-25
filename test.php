<?php 
	class Creatures { 
		public function makeSound() { 
			return "Some sound"; 
		} 
	} 

	class Shobill extends Creatures { 
		public function makeSound() { 
			return "Clattering"; 
		} 
	} 

	class Bear extends Creatures { 
		public function makeSound() { 
			return "Growl"; 
		} 
	} 

	$creatures = [new Shobill(), new Bear()]; 
	foreach($creatures as $creature) { 
		echo $creature->makeSound() . "<br>"; 
	}
?> 
