# allows you to to put messages/warnings/ect on the screen
import ctypes, sys
from pickletools import uint2
from tkinter import Button, Label
from tkinter import *
# allows u to pick random amounts
import random
import settings
import os
#  CREATING A CELL CLASS TO ISTANTIATE
class Cell:
    all = []
    # setting the counter label to the  settings grid size initially.
    cell_count = settings.CELL_COUNT
    cell_count_label_object = None
    def __init__(self,x,y, is_mine=False):
        # checks to see if the cell has been clickedd on or not, for the cell counter
        self.is_opened = False
        # atribute for the player to click on suspected mines
        self.is_mine_candidate = False
        self.x = x
        self.y = y
        self.is_mine = is_mine
        self.cell_btn_object = None

        # Append the object to the Cell.all list
        Cell.all.append(self)

    # how we create a button in main, the location is the info passed in
    # later from main.py
    def create_btn_object(self, location):
        btn =  Button(
            location,
            # BUTTON SIZE CHANGE
            width=12,
            height=4,
        )
        # Assigns an event to a button
        # IE print something when left click, ect.
        btn.bind('<Button-1>', self.left_click_actions) #Left Click
        btn.bind('<Button-3>', self.right_click_actions) #right Click
        # help to customize the cell_btn_object
        self.cell_btn_object = btn

    @staticmethod
    # dont need self if its not a instanced method (i.e static)
    def create_cell_count_label(location):
        # imported from Tkinter
        lbl = Label(
        location,
        bg='black',
        fg='white',
        text=f"Cells Left:{Cell.cell_count}",
        font=("", 30)
        )
        Cell.cell_count_label_object = lbl

    def left_click_actions(self, event):
        if self.is_mine:
            self.show_mine()
        else:
            # auto populates the surrounded cells that arent mines if the cell has 0 nearby mines
            if self.surrounded_cells_mines_length == 0:
                for cell_obj in self.surrounded_cells:
                    cell_obj.show_cell()
            self.show_cell()
            # if mines count is equal to the cells left count, the player has won
            if Cell.cell_count == settings.MINES_COUNT:
                ctypes.windll.user32.MessageBoxW(0, 'Congratulations! You won the game', 'Game Over', 0)
        # cancel left and right click events if cell is already opened
        self.cell_btn_object.unbind('<Button-1>')
        self.cell_btn_object.unbind('<Button-3>')

    # RETRIEVES CELL BY X & Y COORDINATES
    def get_cell_by_axis(self, x,y):
        # return a cell object based on the value of x and y
        for cell in Cell.all:
            if cell.x == x and cell.y == y:
                return cell

    # read only attribute (like __init__)
    @property
    def surrounded_cells(self):
        # formula getting all the surrounding cells to see what they are
        cells =[
            self.get_cell_by_axis(self.x - 1, self.y -1),
            self.get_cell_by_axis(self.x - 1, self.y),
            self.get_cell_by_axis(self.x - 1, self.y +1),
            self.get_cell_by_axis(self.x, self.y -1),
            self.get_cell_by_axis(self.x + 1, self.y - 1),
            self.get_cell_by_axis(self.x + 1, self.y),
            self.get_cell_by_axis(self.x + 1, self.y + 1),
            self.get_cell_by_axis(self.x , self.y +1),
        ]
        # using list comprehension to eliminate non-values in list. (values for x, y that arent being used depending on the cell clicked)
        # overides last surrrounded_cells value
        cells = [cell for cell in cells if cell is not None]
        return cells

    # counts the surrounded cells
    # read only
    @property
    def surrounded_cells_mines_length(self):
        counter = 0
        for cell in self.surrounded_cells:
            if cell.is_mine:
                counter += 1
        return counter


    #  logic that shows if you click on a button that isnt a mine
    def show_cell(self):
        if not self.is_opened:
            Cell.cell_count -= 1
            self.cell_btn_object.configure(text=self.surrounded_cells_mines_length)
            # using the show cell to change the total cell count because it gets initiated every time the count would need to change
            if Cell.cell_count_label_object:
                Cell.cell_count_label_object.configure(
                    # printing the updated cell count to the game
                    text=f"Cells Left:{Cell.cell_count}"
                )
            # resets original color so if a user marked potential mine, left click resets color again
            self.cell_btn_object.configure(
                bg="SystemButtonFace"
            )
        # marked the cell as open to avoid repeats
        self.is_opened = True
    
    def show_mine(self):
        #  logic to interupt game and show player lost, configure allows u to change background
        self.cell_btn_object.configure(bg='red')
        # A GENERIC WINDOWS BOX< PULLED FROM CTYPE
        ctypes.windll.user32.MessageBoxW(0, 'You clicked on a mine', 'Game Over', 0)
        # EXITS GAME UPON LOSS
        sys.exit()






    # code for allowing use to click suspected mines and have them be marked
    def right_click_actions(self, event):
        if not self.is_mine_candidate:
            self.cell_btn_object.configure(
                bg='orange'
            )
            self.is_mine_candidate = True
        # brings back to the original color if clicked again
        else:
            self.cell_btn_object.configure(
                # sets the color back to the default Tkinter color
                bg='SystemButtonFace'
            )
            self.is_mine_candidate = False

# SWITCHING IS_MINE from FALSE to TRUE, TO MAKE THE MINES
# RANDOM allows u to randomziew picking, number is how many get picked
    @staticmethod
    def randomize_mines():
        picked_cells = random.sample(
            Cell.all, settings.MINES_COUNT
            )
        for picked_cell in picked_cells:
            picked_cell.is_mine = True
        

    #  changes the way the object is being represnted
    # puts the mines in a easily readable format in the output
    def __repr__(self):
        return f"Cell({self.x}, {self.y})"