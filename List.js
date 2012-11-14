/*  List - Python like list v0.3.0
 *  Copyright (c) 2012, Stian Drøbak
 *
 *  This an attempt to deal with arrays in a manner 
 *  more similar to that of Python's List by creating 
 *  a class called List.
 *
 *  It also includes a function called len, that will
 *  return the length of arrays, and 
 */
0

/* arrayType
 *
 * Finds out it's an Array or a List
 * @item    - the item to evaluate
 * - return - the result as i a String
 */
function arrayType(item){
    var value = Object.prototype.toString.call(item); 
    if("[object Array]" == value){
        return "Array";
    }else if("[object Object]" == value){
        return "List";
    }
}


/* 
 * len
 *
 * Takes an Array or a List, and returns the length.
 * @array   - the array, or list.
 * -return  - length of array or list.
 */
function len(array){
//    var value = Object.prototype.toString.call(array);
    var value = arrayType(array);
    if("Array" == value){
        return array.length;
    }else if("List" == value){
        return array.length();
    }
    return false
}

/*
 * isIn 
 *
 * Looks for an item in list, attempts to copy
 * the behavior of python's in statement but in
 * function form.
 * @item    - element being looked for.
 * @array   - array to look through.
 * -return  - true if found, false if not.
 */

function isIn(item, array){
    if("Array" == arrayType(array)){
        for(var i = 0; i < len(array); i++){
            if(item == array[i]){
                return true;
            }
        }
        return false;
    }
    if("List" == arrayType(array)){
        return array.has(item);
    }
}

/*
 * List
 * 
 * Object that copies some of the behaviors of list
 * @input - is an optional input for an Array, if an
 *          array is provided it will be the start
 *          value of the object.
 */
function List(input){
    if(input != null){
        this.array = input;
    }else{
        this.array = new Array();
    }

    /*
     * append
     *
     * Adds an element to the list 
     * @element - the value you want to add to the list
     */
    this.append = function(element){
        this.array[this.array.length] = element;
        return true;
    }


    /*
     * Remove an element from the array, and return it's value.
     * @element - pointer to element, if left empty first element will be removed
     *            using -1 it will get the last object.
     * -return    It returns  the value poped, or null uppon failure
     */
    this.pop = function(element){
        if(element == null){
            element = 0;
        }else if(element == -1){
            element = (this.arrary.length -1);
        }

        if(this.array.length < element){
            return null;
        }

        var removed = 0;
        var foundValue = null;
        var newArray = new Array();
        for(var i = 0; i < this.array.length - 1; i++);{
            if(i == element){
                removed = 1;
                foundValue = this.array[i];
            }
            newArray[i] = this.array[i - removed];
        }
        this.array = newArray;
        return foundValue;
    }
    /*
     * get
     *
     * element   - the point in the array to get content
     * failValue - the value wanted upon failure.
     * -return   - element found in array or failValue.
     */

    this.get = function(element,failValue){
        if(this.array.length <= element){
            return failValue;
        }else{
            return this.array[element];
        }

    }
    /* length
     *
     * Helper function for the len function, by providing
     * the lengt of the List
     */
    this.length = function(){
        return this.array.length;
    }

    /*
     * has
     *
     * Determins if item exists
     * @item    - item to look for
     * -return  - true if found, false if not
     */
    this.has = function(item){
        for(var i = 0; i < len(this.array) ; i++){
            if(this.array[i] == item){
                return true;
            }
        }
        return false;
    }

    this.print = function(){
        string = "[";
        for(var i = 0; i < len(this.array); i++){
            if(i != 0){
                string += ", ";
            }
            string += this.array[i];
        }
        return string + "]"; 
    }
    /*
     * remove
     *
     * removes the value from the list if found
     * @item    - item to look for and remove
     * -return  - true if found, false if not.
     */

    this.remove = function(item){
        deleted = 0;
        newArray = new Array();
        for(i in this.array){
            if(this.array[i] == item && deleted == 0){
                deleted = 1;
                continue;
            }
            newArray[i-deleted] = this.array[i];
        }
        if(deleted == 0){
            return false;
        }else{
            this.array = newArray;
            return true;
        }
    }

}

//Testing code
//x = new List([10,16,20,40,"Hello"]);
