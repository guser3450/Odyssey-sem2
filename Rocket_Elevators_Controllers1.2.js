//COLUMN
    //- ELEVATOR list
    //- Buttons
    //- nbFloor
    //- nbElevator

//ELEVATOR
    //- floor
    //- direction
    //- status

//REQUEST 
    //- destination
    //- floor
    //- elevator for this specific senario 
    var priority_1_elevator_list = [];
    var priority_2_elevator_list = [];   
    var priority_3_elevator_list = []; 
    var priority_4_elevator_list = [];


var smallest;
var found;

//EVERYTHING IN A COLUMN--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// everything in a column is here
class Column {
    constructor(nb_floor, nb_elevator){
        this.elevatorList = [];
        this.floorList = [];
        this.CallButtonList = [];
    
        //defining the number of elevator
        for(var i = 1; i <= nb_elevator; i = i + 1){
            this.elevatorList.push(new Elevator("elevator"+i, 2,));
        } 
        //number of floor in the building
        for(var i = 1; i <= nb_floor; i = i + 1){
            this.floorList.push(i);
        }
        // adding button UP and DOWN on every floor except for the 1 floor(only go up) and last floor(only go down)
        for(var i = 1; i <= nb_floor; i++){
            //console.count("UP")
            //console.count("DOWN")
            if(i != 1){
                var callButton = new CallButton("DOWN", i);
                this.CallButtonList.push(callButton);
            }
            if(i != nb_floor){
                var callButton = new CallButton("UP", i);
                this.CallButtonList.push(callButton)
            }
        }
    }




    //everyhing happen here cause it all with the user request
    // request_elevator(floor, direction){
    //      console.log("etape1 marche")
    //      var elevator = this.findElevator(floor, direction);
         //this.elevatorList[elevator].activeList = floor;
         //moveBy(elevator);
         //queue();
         //Open_door();
         //Close_door();
     //}



    //difference between the user floor and the elevator floor
    calculate_gap(user_floor){
        console.log(user_floor, "user_floor value")
        console.log('ENTER calcul')
        let gap = [];

        for(var i = 0; i < this.elevatorList.length; i++) {

        // var elevator = this.elevatorList[i];
        
        // var user_floor = user_floor;
        //var elevator_floor = floor;
        gap[i] = Math.abs(this.elevatorList[i].elevator_floor - user_floor)
        }

        for (var m = 0; m < gap.length; m++) {
            if (Math.min.apply(null, gap) === Math.abs(this.elevatorList[m].elevator_floor - user_floor)) {
                return this.elevatorList[m];
            }
        }
    }

            // if(priority_1_elevator_list.length >= 2){
            //     console.log("calcule priority 1")
            //     // console.log('user_floor',user_floor)
            //     // console.log("elevator_floor", elevator.elevator_floor)
            //     var value = elevator.elevator_floor - user_floor;
            //     // return (Math.min(Math.abs(value)))
            //     // console.log(Math.min(Math.abs(value)), "the smallest value p1")
            //     //return positive smallest value
            // }
            // else if(priority_2_elevator_list.length >= 2){
            //     console.log("calcule priority 2")
            //     // console.log('user_floor',user_floor)
            //     // console.log("elevator_floor", elevator.elevator_floor)
            //     var value = elevator.elevator_floor - user_floor;
            //     // return (Math.min(Math.abs(value)))
            //     // console.log(Math.min(Math.abs(value)), "the smallest value p2")
            //     //return positive smallest value
            // }
            // else if(priority_3_elevator_list.length >= 2){
            //     console.log("calcule priority 3")
            //     // console.log('user_floor',user_floor)
            //     // console.log("elevator_floor", elevator.elevator_floor)
            //     var value = elevator.elevator_floor - user_floor;
            //     elevator.finalGap = Math.abs(value)
            //     console.log('final', elevator.finalGap);
            //     console.log('list: ', this.elevatorList)
            //     // return Math.min(this.elevatorList[i].finalGap)

            //     // return (Math.min(Math.abs(value)))
            //     // console.log(Math.min(Math.abs(value)), "the smallest value p3")
            //     //return positive smallest value
            // }
            // else if(priority_4_elevator_list.length >= 2){
            //     console.log("calcule priority 4")
            //     // console.log('user_floor',user_floor)
            //     // console.log("elevator_floor", elevator.elevator_floor)
            //     var value = elevator.elevator_floor - user_floor;
            //     // return (Math.min(Math.abs(value)))
            //     // console.log(Math.min(Math.abs(value)), "the smallest value p4")
            //     //return positive smallest value
            // }
        // }
    // }

    //the function to find a elevator
    //I HAVE TO BUT SOMETHING TO NOT HANDLY RIGHT EVERYTHING
    findElevator(user_floor, user_direction) {


            let found_list = []


        // this loop is using all elevator in the elevator list to see in witch priority list there in
        for(var i = 0; i < this.elevatorList.length; i++) {
            var elevator = this.elevatorList[i];
            console.log('ENTERED LOOP WITH: ', elevator)

            var user_floor = user_floor;
            console.log('user floor', user_floor)

            var user_direction = user_direction;
            console.log('user direction', user_direction)
            // var final_elevator = this.calculate_gap(value);

            // if(priority_1_elevator_list.includes(this.elevatorList[i])){
            //     console.log(this.elevatorList[i])
            // }
            // else if(priority_2_elevator_list.includes(this.elevatorList[i])){
            //     console.log(this.elevatorList[i])
            // }
            // else if(priority_3_elevator_list.includes(this.elevatorList[i])){
            //     console.log(this.elevatorList[i])
            // }
            // else if(priority_4_elevator_list.includes(this.elevatorList[i])){
            //     console.log(this.elevatorList[i])
            // }


            if( (user_floor > elevator.elevator_floor && user_direction == "UP" && elevator.direction == "UP" || user_floor < elevator.elevator_floor) && user_direction == "DOWN" && elevator.direction == "DOWN") {
                console.log("ENTERED CASE 1")
                console.log(diff(this.elevatorList[i], user_floor), "lalalalalalallalala")
                found_list.push(elevator);
                // if(priority_1_elevator_list.length >= 1){
                //     console.log("ENTER!!!!!!!!!!!!!!!!!!!!!!!!")
                //    found = this.calculate_gap(user_floor)
                //    found_list.push({found: 1})
                //    console.log('found', found);
                //}
            }
            else if(user_floor == elevator.elevator_floor && elevator.direction == ""){
                console.log("ENTERED CASE 2")
                // var score = forEach.elevatorList[i] + 2
                found_list.push(elevator);
                if(priority_2_elevator_list.length >= 1){
                    console.log("ENTER!!!!!!!!!!!!!!!!!!!!!!!!")
                   found = this.calculate_gap(user_floor)
                   found_list.push({found: 2})
                   console.log('found', found);
                }
            }
            else if(user_floor > elevator.elevator_floor && elevator.direction == "" || user_floor < elevator.elevator_floor && elevator.direction == ""){
                console.log("ENTERED CASE 3")
                var el = this.elevatorList[i], user_floor
                console.log(this.elevatorList[i], "lalalalalalallalala")
                found_list.push(elevator);
                if(priority_3_elevator_list.length >= 1){
                    console.log("ENTER!!!!!!!!!!!!!!!!!!!!!!!!")
                   found = this.calculate_gap(user_floor)
                   found_list.push({found: 3})
                   console.log('found', found);
                }
            }
            else if( user_floor > elevator.elevator_floor && user_direction != elevator.direction || user_floor < elevator.elevator_floor && user_direction != elevator.direction){
                console.log("ENTERED CASE 4")
                // var score = forEach.elevatorList[i] + 4
                found_list.push(elevator);
                if(priority_4_elevator_list.length >= 1){
                    console.log("ENTER!!!!!!!!!!!!!!!!!!!!!!!!")   
                   found = this.calculate_gap(user_floor)
                   found.push({found: 4})
                   console.log('found', found);
                }
            }
            //else(elevator.List[i] != )
        }
        console.log(found_list, "1111111111111111111111111111111111111111111111")

        if (found_list.length > 0) {
            console.log("LAST CONDITION")
            for(var e = 0; e < found_list.length; e++) {
            return Math.min(this.elevatorList.score)
        }
    }
    }


    request_floor(floor, direction){
        console.log("Button in elevator")
        for(var i = 0; i < this.floorList.length; i++){
            var floor = this.floorList = [i];
            console.table(this.floorList[i])
        }
    }
}

///EVERYTHING IN A COLUMN--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//BUTTON ON EACH FLOOR---------------------------------------------------------------------------------------------------------------

//the purpose of the ID is to track each call made by the user in any floor
class CallButton{
    constructor(direction, floor, nb_elevator, nb_floor, ID){
        this.direction = direction;
        this.floor = floor;
        this.ID = ID;
        
    // for(var i = 0; i < nb_elevator; i = i + 1){
    //     console.log("Callbutton");
    //                                         //elevator(x), starting floor, direction to go, status 
    //     this.elevatorList.push(new Elevator("elevator"+i, 2,'UP', 'IDLE'));
    // }
    // for(var i = 0; i < nb_floor; i = i + 1){
    //     console.log("nb de floor")
    //     this.floor.push(new Floor("floor"+i, 10,));
    // }
    }
}

///BUTTON ON EACH FLOOR----------------------------------------------------------------------------------------------------------------




//PANEL IN ELEVATOR----------------------------------------------------------------------------------------------

// the panel in the elevator to choose the floor to go 
class Control_Panel{
    constructor(floor){
        this.floor = floor;
        this.window
        var button = floor;
        button = document.createElement("button");
        // window.onclick = function(e) {
        //     console.log(e); // then e.srcElement.className has the class
        // }
        
        // for(button.forEach(floor)){
        //     console.log(createElement("button")
        // }
    }
}
///PANEL IN ELEVATOR---------------------------------------------------------------------------------------------------



//ELEVATORS----------------------------------------------------------------------------------------

//the purpose of th ID is to track each elevator so I can then use there value 
class Elevator{
    constructor(name, floor){
        this.name = name;
        this.activeList = [];
        this.elevator_floor = floor; 
        this.direction = "";
        this.score = [];

        //console.log("class elevator marche");
    }


    move(elevator, activeList){
        console.log("move")
        this.activeList = [];

        while(RequestElevator >= 1){
            if(activeList > 0){
                if(elevator.current_floor < elevator.activeList[0]){
                    moveUp;
                }
                //at this point the elevator is at the same floor to the user 
                else{
                    Open_door();
                    Close_door();
                    this.activeList.pop(direction, floor); 
                }
            }
            else if(activeList >= 1){
                if(elevator.current_floor > elevator.activeList[0]){
                    moveDOWN;
                }
                else{
                    Open_door();
                    Close_door();
                    this.activeList.pop(direction, floor);
                }
            }
        }
    }


    activelist(elevator, direction){
        console.log("active list")

        if(elevator == "idle"){
            this.activeList.push(direction);
        }
        else if(elevator != "idle"){
            this.activeList.push(direction);
        }
    }
}
///ELEVATORS------------------------------------------------------------------------------------------------




    // function queue(floor, direction){
    //    IF user request_elevator direction EQUALS to elevator current direction THEN
    //   elevator will stop AND Open_door AND Close_door AND continue is direction 
    //ELSE user request_elevator direction is NOT EQUALS to current direction THEN
    //    elevator will continue is Move 

    //the elevator was already choose in my findelevator()
    
    
    // function find_direction(floor, buttons){
    //     var 
    
    //     if(user p)
    // }




    

    //DOORS -------------------------------------------------------------------------
    
    // //A and B represent both side of the wall witch the door go to 
    // function Open_door(){
    //     var speed = 10sec 
    //     var A = wall1
    //     var B = wall2
    //     var door = elevator door 
    
    //     if(Open_door == true)
    //         door go to A to B
    // }
    
    // //same logic from open_door but in reverse
    // function close_door(){
    //     var obstacle = object 
    //     var A = wall1
    //     var B = wall2 
    //     var door = elevator door
    
    //     if(obstacle == true)
    //         Open_door()
    
    //     else(Close_door()== true)
    //         door go to B to A 
    // }


    ///DOORS -------------------------------------------------------------------------




    
    //SECTION DES TESTS

    console.log("DEBUT DU TEST 3")
    var column_test_4 = new Column(10, 2);

    column_test_4.elevatorList[0].elevator_floor = 2
    column_test_4.elevatorList[0].direction = ""

    column_test_4.elevatorList[1].elevator_floor = 6
    column_test_4.elevatorList[1].direction = ""

    console.log('ENTERED FIND ELEVATOR');
    ele = column_test_4.findElevator(3, "UP")
    console.log('ele',ele)


    // console.log(priority_1_elevator_list, "elevator in priority 1")
    // console.log(priority_2_elevator_list, "elevator in priority 2")
    // console.log(priority_3_elevator_list, "elevator in priority 3")
    // console.log(priority_4_elevator_list, "elevator in priority 4")
    // console.log(found, "ELEVATOR FOUND!!!" )


    // console.log("FIN DU TEST 3")