# A GREAT LIBRARY WITH A LOT OF USEFUL CLASSES FOR INSTANTIATING.
from tkinter import *
import settings
import utils
from cell import Cell
# INSTANTIATING A WINDOW(TAB) INSTANCE (EVERYTHING GOES BETWEEN THIS AND ROOT.MAINLOOP())
root = Tk()
# OVerride the settings of the window

# BACKGROUND COLOR
root.configure(bg="black")
# SETS THE WIDTH AND HIGHT
root.geometry(f"{settings.WIDTH}x{settings.HEIGHT}")
#  CHANGES TITLE 
root.title("Minesweeper Game")
# STOPS RESIZING, INPUTS REPRESNT WIDTH, THEN HEIGHT
root.resizable(False, False)

top_frame = Frame(
    root, 
    bg='black', #CHANGE LATER TO BLACK
    width=settings.WIDTH,
    height=utils.height_prct(25)
)
# X and Y rerfence the starting pixel location. 0,0 always references top left of screen
top_frame.place(x=0, y=0)

# TITLE
game_title = Label(
    top_frame,
    bg='black',
    fg='white',
    text='Minesweeper Game',
    font=('', 48)
)



game_title.place(
    x=utils.width_prct(25), y=0
)

left_frame = Frame(
    root,
    bg="black",
    width=utils.width_prct(25),
    height=utils.height_prct(75)
)
left_frame.place(x=0, y= utils.height_prct(25))

center_frame = Frame(
    root,
    bg='black',
    width=utils.width_prct(75),
    height= utils.height_prct(75)
)
center_frame.place(x=utils.width_prct(25), y =utils.height_prct(25))

#  This is using loops to make a grid, in this case a 6x6
# Cell is getting instantiated by c, then were connecting the btn_object
# to the center frame, then making a Tkinter grid(using tkinter built in logic)
# then associating the to for loops to the grids columns and rows
for x in range (settings.GRID_SIZE):
    for y in range (settings.GRID_SIZE):
        c = Cell(x, y)
        c.create_btn_object(center_frame)
        c.cell_btn_object.grid(
            column=x, row= y
        )


# Call the label from the Cell class (storing in the left frame)
Cell.create_cell_count_label(left_frame)
# places it in the flame, numbers are relatitive to the frame itself
Cell.cell_count_label_object.place(x=0, y=0)

Cell.randomize_mines()

#  KEEPS THE TAB RUNNING UNTIL CLOSED, OTHERWISE WOULDNT WORK
root.mainloop()