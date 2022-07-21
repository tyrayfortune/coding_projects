
WIDTH = 1440
HEIGHT=720

# SETS THE GAMES GRID SIZE!!!
GRID_SIZE=6

# how many cells in the game, grid size to the power of 2
CELL_COUNT = GRID_SIZE ** 2

# FORMULA FOR MINE AMOUNT
#  double / forces it to be an integer
MINES_COUNT=(CELL_COUNT) // 4